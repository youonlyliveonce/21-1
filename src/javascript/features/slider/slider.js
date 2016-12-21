import Base from '../base';

let Slider = Base.extend({
	props: {
		id: ['string', true, '']
		,filter: ['object', true, function(){ return {}; }]
		,isscrollable: ['boolean', true, true]
		,active: ['boolean', true, false]
		,parentview: ['object', true, function(){ return {} }]
		,swiper: ['object', true, function(){ return {} }]
		,layer: ['array', true, function(){ return [] }]
		,activelayer: ['object', true, function(){ return {} }]
		,settings: ['object', true, function(){ return {
						speed: 600,
						// effect: 'fade',
						loop: true
					}
		}]
	},

	events: {
		'click .Button--right':'handleRightClick',
		'click .Button--left':'handleLeftClick',
		'mousemove .swiper-container':'handleMouseMove'
	},

	render: function(){
		let self = this;
		this.cacheElements({ });
		this.on('change:active', this.onActiveChange, this);
		console.log(self.id);
		TweenMax.delayedCall(0.15, function(){
				self.swiper = new Swiper('#'+self.id+' .swiper-container', self.settings);
		})

		this.layer = this.queryAll('#'+this.id+' .Slider__layer div');
		return this;
	},
	onActiveChange: function(view, value){
		let self = this;
		if(value){
			self.activelayer = self.layer[self.swiper.realIndex];
			self.gfxIn();
			this.swiper.on('slideChangeStart', function (event) {
				for(let i=0; i<self.layer.length; i++){
					if(i == event.realIndex){
							self.activelayer = self.layer[i]
							self.gfxIn();
					} else {
						self.layer[i].classList.remove('active');
					}
				}
			});
		} else {
			self.layer[this.swiper.realIndex].classList.remove('active');
			this.swiper.off('slideChangeStart');
		}
	},
	gfxIn: function(){
		this.activelayer.classList.add('active');
		// this.gfxLetterIn(this.activelayer);
		this.gfxLinesIn(this.activelayer);
	},
	// gfxLetterIn: function(node){
	// 	let letters = node.getElementsByClassName('letter');
	// },
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

	}

})

export default Slider;
