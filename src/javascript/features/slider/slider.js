import Base from '../base';

let Slider = Base.extend({
	props: {
		id: ['string', true, '']
		,filter: ['object', true, function(){ return {}; }]
		,isscrollable: ['boolean', true, true]
		,active: ['boolean', true, false]
		,parentview: ['object', true, function(){ return {} }]
		,swiper: ['object', true, function(){ return undefined }]
		,activeindex: ['number', true, -1]
		,layer: ['array', true, function(){ return [] }]
		,navigation: ['array', true, function(){ return [] }]
		,textbox: ['object', true, function(){ return undefined }]
		,settings: ['object', true, function(){ return {
						speed: 600,
						// effect: 'fade',
						loop: true,
						pagination: '.Slider .swiper-pagination',
						paginationClickable: true
					}
		}]
	},

	events: {
		// 'click .Button--right':'handleRightClick',
		// 'click .Button--left':'handleLeftClick',
		'mousemove .swiper-container':'handleMouseMove',
		'click .Contentnavigation li':'handleClickContentnaviItem',
		'click .Contentnavigation':'handleClickContentnavi',
		'click .Contentnavigation__background':'handleClickContentnaviClose',
		'click .Button--contentnavi':'handleClickContentnavi',
	},

	render: function(){
		this.cacheElements({
			'navigationContainer': '.Contentnavigation'
		});
		this.on('change:active', this.onActiveChange, this);
		TweenMax.delayedCall(0.15, function(){
				this.swiper = new Swiper('#'+this.id+' .swiper-container', this.settings);
				if(this.active){
					this.bindChangeStart();
				}
		}, [], this);
		this.layer = this.queryAll('#'+this.id+' .Slider__layer div');
		this.navigation = this.queryAll('#'+this.id+' .Contentnavigation li');
		return this;
	},
	onActiveChange: function(view, value){
		if(value){
			TweenMax.delayedCall(1.25, function(){
				if(this.active){
					this.bindChangeStart();
				}
			}, [], this);
		} else {
			this.layer[this.swiper.realIndex].classList.remove('active');
			this.navigation[this.swiper.realIndex].classList.remove('active');
			this.swiper.off('slideChangeStart');
		}
	},
	bindChangeStart: function(){
		let self = this;
		if(self.swiper != undefined){
			self.setActiveIndex(self.swiper.realIndex);
			self.swiper.on('slideChangeStart', function (event) {
				self.setActiveIndex(event.realIndex);
			});
		}
	},
	gfxIn: function(){
		this.layer[this.activeindex].classList.add('active');
		this.navigation[this.activeindex].classList.add('active');
		this.gfxLinesIn(this.layer[this.activeindex]);
	},
	gfxLinesIn: function(node){
		let lines = node.getElementsByTagName('line');
		TweenMax.set(lines, {drawSVG:"0% 0%"});
		TweenMax.staggerTo(lines, 0.5, {drawSVG:"0% 100%", delay:0.5, onComplete:function(){
			TweenMax.to(this.target, 0.5, {drawSVG:"100% 100%", onComplete:function(){
				let tlength = Math.random()*100;
				TweenMax.set(this.target, {drawSVG:"0% 0%"});
				TweenMax.to(this.target, 1.2, {drawSVG:`0% ${tlength}%`});
			}});
		}}, 0.15);
	},
	setActiveIndex: function(newIndex){
		if(this.activeindex != -1){
			this.layer[this.activeindex].classList.remove('active');
			this.navigation[this.activeindex].classList.remove('active');
		}
		this.activeindex = newIndex;
		this.gfxIn();
		this.textbox = (this.layer[this.activeindex].getElementsByClassName('Textbox__body')[0] == undefined) ? [] : this.layer[this.activeindex].getElementsByClassName('Textbox__body')[0];
	},
	handleResize: function(){
		var newWidth = document.body.clientHeight/9*16,
				newHeight = document.body.clientHeight;
		if(newWidth < document.body.clientWidth) {
			newWidth = document.body.clientWidth,
			newHeight = document.body.clientWidth/16*9;
		}
		this.el.setAttribute("style", "height:"+document.body.clientHeight+"px");
		// resize all textboxen

		// this.ratio.setAttribute("style", "width:"+newWidth+"px; height:"+newHeight+"px;");
	},
	handleRightClick: function(){
		this.swiper.slideNext();
	},
	handleLeftClick: function(){
		this.swiper.slidePrev();
	},
	handleMouseMove: function(event){

	},
	handleClickContentnavi: function(event){
		event.preventDefault();
		this.navigationContainer.classList.add('open');
	},
	handleClickContentnaviClose: function(event){
		this.navigationContainer.classList.remove('open');
	},
	handleClickContentnaviItem: function(event){
		let newIndex = Number(event.delegateTarget.getAttribute('data-index'))+1;
		TweenMax.delayedCall(1.25, function(){
			this.navigationContainer.classList.remove('open');
		}, [], this);
		this.swiper.slideTo(newIndex);
	},
	handleMouseWheel: function(event){
		let e = window.event || event || event.originalEvent;
		let delta = e.deltaY || e.wheelDelta;

		// FF Y-Achse
		if(e.axis == 2){
			delta = 3*e.detail;
		}

		if(event.target && event.target.offsetParent &&
			( event.target.offsetParent.classList.contains('Textbox__wrapper') 
				|| event.target.offsetParent.classList.contains('Textbox__body')
				|| event.target.classList.contains('Textbox__body')
				|| event.target.classList.contains('Textbox__wrapper') ) ){
			if(delta < 0){
				if(this.textbox._gsTransform && this.textbox._gsTransform.y-delta > 0){
					TweenMax.set(this.textbox, {y: 0});
				} else {
					TweenMax.set(this.textbox, {y:`-=${delta}`});
				}
			} else if (delta > 0) {
				let cH = this.textbox.parentNode.clientHeight - this.textbox.parentNode.parentNode.clientHeight,
						bH = this.textbox.parentNode.parentNode.clientHeight,
						dH = cH-bH;

				if(this.textbox._gsTransform && this.textbox._gsTransform.y-delta < dH){
					TweenMax.set(this.textbox, {y: dH});
				} else {
					TweenMax.set(this.textbox, {y:`-=${delta}`});
				}
			}
		} else {
			if(delta < -19){
				this.parentview.previousSlide()
			} else if(delta > 19) {
				this.parentview.nextSlide()
			}
		}

	}

})

export default Slider;
