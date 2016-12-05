/*global me, app*/
import _ from 'underscore';
import View from 'ampersand-view';
import dom from 'ampersand-dom';
import ViewSwitcher from 'ampersand-view-switcher';

import "ScrollToPlugin";
import "TweenMax";

var MainView = View.extend({

		/* Set Properties */
		props: {
			isSticky: ['boolean', true, false]
		},

		/* Bind basic Events, all link clicks, toggle Navigation, etc. */
		events: {
				'click a[href]': 'handleLinkClick',
				'click .Button--toggle': 'handleClickToggle',
				// 'click .Button--close': 'handleClickToggle',
		},

		/* Render Main View */
		render: function () {

				/* Set scope for callbacks */
				var self = this;

				/* Cache Elements */
				this.cacheElements({
						page: '#page',
						main: '#main',
						footer: '#footer',
						header: '#header',
						nav: '.nav',
						navmain: '.nav-main',
						switcher: '[data-hook=switcher]'
				});

				this.handleScrollNavigation();
				// Init and configure our page switcher
				this.pageSwitcher = new ViewSwitcher(this.queryByHook('switcher'), {
						waitForRemove: false,
						hide: function (oldView, cb) {
								// Set scope for callback of TweenMax
								var inSwitcher = this;

								// Hide oldView if oldView exits
								if(oldView && oldView.el){
										oldView.hookBeforeHide();
										TweenMax.to(oldView.el, 0.4, {opacity:0, onComplete:function(){
												// scroll to top
												TweenMax.to(window, 0.3, {scrollTo:{y:0}});
												// cb triggers the show function in ViewSwitcher
												cb.apply(inSwitcher);
										}, delay:0.2 });
								}
						},
						show: function (newView) {

								// Set newView opacity to 0
								TweenMax.set(newView.el, {opacity:0});

								// Animate newView opacity to 1
								TweenMax.to(newView.el, 0.8, {opacity:1, onComplete:function(){
									newView.hookAfterShow();
									// Scroll to paramter 'section'
									self.scrollTo();
								}, delay:1.2});
						}
				});
				return this;
		},

		/*

			Function for the inital Handling of the Page

		*/

		handleInitialView: function (view) {

				var self = this;

				// Set child view as initial
				view.isInitial = true;

				// Set the el of the child view
				view.el = this.query('.View');

				// Render child view
				view.render();

				// After transition Stuff
				view.hookAfterShow();

				// Set current view of page switcher (silent)
				this.pageSwitcher.current = view;

				// Handle active stuff in navigation
				this.updateActiveNav();


				// Scroll to paramter 'section'
				TweenMax.delayedCall(0.15, function(){ self.handleUpdateView() });
		},

		/*

			Function for the Handling of a new Page loaded via Ajax

		*/

		handleNewView: function (view) {

				document.title = _.result(view.model, 'pageTitle');

				// TRACKING
				if(typeof ga != 'undefined'){
						ga('send', 'pageview', {
								'page': CM.App.router.history.location.pathname,
								'title': view.model.pageTitle
						});
				}

				// SWICTH THE VIEW
				this.pageSwitcher.set(view);

				// UPDATE PAG NAV
				this.updateActiveNav();

		},

		/*
			Updates current View if something changes but no url
		*/
		handleUpdateView: function(){
			this.scrollTo();
			this.overlayerTo();
		},

		/*
			Toggle functions for mobile or Desktop Navigation
		*/

		handleClickToggle: function (e){

			var body = document.body;
			if( dom.hasClass(body, 'Navigation--show') || e == undefined){
					dom.removeClass(body, 'Navigation--show');
			} else {
					dom.addClass(body, 'Navigation--show');
			}
		},

		handleClickClose: function (e){
			var body = document.body;
			dom.removeClass(body, 'Navigation--show');
		},

		handleClickOpen: function (e){
			var body = document.body;
			dom.addClass(body, 'Navigation--show');
		},

		handleScrollNavigation: function (){
			// window.addEventListener('scroll', function() {
			// 	if(window.scrollY >= 0){
			// 		let self = this,
			// 				height = 160,
			// 				navigationscroll = document.querySelector('.Navigation-sticky');
			// 		if(window.scrollY > height && !self.isSticky){
			// 			self.isSticky = true;
			// 			dom.addClass(navigationscroll, 'active');
			// 		} else if(window.scrollY < height && self.isSticky){
			// 			self.isSticky = false;
			// 			dom.removeClass(navigationscroll, 'active');
			// 		}
			// 	}
			// });
		},


		/*

		Click Handler for each a[href]

		*/

		handleLinkClick: function (e) {

			var aTag = e.delegateTarget,
					self = this,
					path = aTag.getAttribute("href");

				var local = aTag.host === window.location.host;
				if (local && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && aTag.getAttribute("target") !== "_blank") {
						// no link handling via Browser
						e.preventDefault();
						// Route
						CM.App.navigate(path);
						// Update View without reloading view
						if (CM.App._params != {} && this.paramArray != {} && CM.App.router.history.location.pathname == e.delegateTarget.pathname ){
							this.handleUpdateView();
						}
						// Close Navigation
						this.handleClickClose();
				}
		},

		scrollTo: function(){
				if (CM.App._params != {} && CM.App._params.section != null){
						var id = this.query('#'+CM.App._params.section);
						TweenMax.to(window, 1.2, {scrollTo:{x:0, y:id.offsetTop}, overwrite:true, ease:Power2.easeOut});
				}
		},
		overlayerTo: function (){
			let self = this,
					body = document.querySelector('body');
			if (CM.App._params != {} && CM.App._params.overlayer != null){
					let url = CM.App._params.overlayer,
							xhr = new XMLHttpRequest();
					dom.addClass(body, 'Overlayer_open');
					dom.addClass(self.overlayer, 'active');

					xhr.open('GET', url);
					xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					xhr.onload = function () {
						let data = xhr.responseText;
						dom.removeClass(self.overlayerWrapper, 'Overlayer-loader');
						self.overlayerInner.innerHTML = data;
						// self.pageSwitcher.current.bindSlider('.galleryslider', 'gallery');
					}
					xhr.send("action=read");
			}
		},
		updateActiveNav: function () {
				var path = window.location.pathname.slice(1),
						search = /(\w+\/)/g,
						match = search.exec(path),
						folder = path;

				if (match != null ) folder = match[0];
				this.queryAll('.Navigation a[href]').forEach(function (aTag) {

						var aPath = aTag.pathname.slice(1),
								parent = aTag.parentNode.className.indexOf('sub') != -1
												? aTag.parentNode.parentNode.parentNode
												: aTag.parentNode;

						if ( folder.length >= 1 && aPath.indexOf(folder) === 0){
										dom.addClass(parent, 'active');
						} else {
								if ( aPath == path){
										dom.addClass(parent, 'active');
								} else {
										dom.removeClass(parent, 'active');
								}
						}

				});
		}

});


export default MainView;
