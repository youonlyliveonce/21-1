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
	},
	handleResize: function(){
		var newWidth = document.body.clientHeight/9*16,
				newHeight = document.body.clientHeight;
		if(newWidth < document.body.clientWidth) {
			newWidth = document.body.clientWidth,
			newHeight = document.body.clientWidth/16*9;
		}
		this.el.setAttribute("style", "height:"+document.body.clientHeight+"px");
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
		let e = window.event || e || e.originalEvent;
		let value = e.wheelDelta || -e.deltaY || -e.detail;
		let delta = Math.max(-20, Math.min(20, value));
		console.log(event);
		if(event.target.offsetParent.classList.contains('.Textbox__wrapper')){
			console.log("Textbox");
		} else {
			if(delta < -19){
				this.parentview.nextSlide()
			} else if(delta > 19) {
				this.parentview.previousSlide()
			}
		}

	}

})

export default Slider;
