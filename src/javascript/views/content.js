import PageView from './base';
import View from 'ampersand-view';
import YoutubeView from '../features/youtube/youtube';
import GridView from '../features/filtergrid/filtergrid';

let Content = PageView.extend({

	props:{
		isInitial: ['boolean', true, false]
		,isScrollTop: ['boolean', true, false]
		,subViews: ['array', true, function(){ return []; }]
		,activeElement: ['object', true, function(){ return {}; }]
	},

	events: {

	},

	hookBeforeHide: function() {

	},

	hookInRender: function () {
		let self = this;
		let elements = this.queryAll('.Element');
		if(elements.length > 0){
			elements.forEach(function(element, index, array){

				let view = {};
				switch(element.dataset.view){
					case "VideoView" :
						element.getElementsByTagName('iframe')[0].setAttribute('id', 'videobox'+index)
						view = new YoutubeView({el:element, id:'videobox'+index});
						view.render();
						break;
					case "GridView" :
						view = new GridView({el:element});
						view.render();
						break;
					default:

				}
				self.subViews.push({id:element.getAttribute("id"), view:view});
			});
		}

		this.updateActiveView();

		TweenMax.delayedCall(0.8, function(){
				self.bindSlider('.swiper-container', 'basic');
		});

		this.hammerSwipe = new Hammer(this.el);
		this.hammerSwipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
		this.hammerSwipe.on('swipeup', this.handleSwipeUp.bind(this));
		this.hammerSwipe.on('swipedown', this.handleSwipeDown.bind(this));

	},
	handleResize: function(){
		console.log("handleResize");
		this.subViews.forEach(function(element){
			element.view.handleResize();
		});
	},
	hookAfterShow: function(){

	},
	handleSwipeUp: function(event){
		// nächstes Element ermitteln
		let index  = this.subViews.indexOf(this.activeElement);
		if(index != this.subViews.length -1){
			this.activeElement.view.active = false;
			CM.App.navigate(`/?section=${this.subViews[index+1].view.el.getAttribute('id')}`);
		}
	},
	handleSwipeDown: function(event){
		let index  = this.subViews.indexOf(this.activeElement);
		if(index != 0){
			this.activeElement.view.active = false;
			CM.App.navigate(`/?section=${this.subViews[index-1].view.el.getAttribute('id')}`);
		}
	},
	updateActiveView: function(){
		if (CM.App._params != {} && CM.App._params.section != null){
			this.activeElement = this.subViews.filter(element => { return element.id == CM.App._params.section })[0]
		} else {
			this.activeElement = this.subViews[0]
		}
		this.activeElement.view.active = true;
	}

});

export default Content;
