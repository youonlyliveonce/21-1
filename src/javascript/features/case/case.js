import Base from '../base';

let Case = Base.extend({
	props: {
		id: ['string', true, '']
		,isscrollable: ['boolean', true, true]
		,parentview: ['object', true, function(){ return {} }]
		,swiper: ['object', true, function(){ return undefined }]
		,settings: ['object', true, function(){ return {
						speed: 600,
						// effect: 'fade',
						pagination: '.Case .swiper-pagination',
						paginationClickable: true,
						nextButton: '.Case .swiper-button-next',
						prevButton: '.Case .swiper-button-prev',
						loop: true
					}
		}]
		,topend: ['boolean', true, true]
		,bottomend: ['boolean', true, false]
	},

	events: { },

	render: function(){
		this.cacheElements({
				caseBody: '.Case__body',
				ratio : '.Videobox__background'
		});
		if(this.queryAll('#'+this.id+' .swiper-slide').length > 1){
			TweenMax.delayedCall(0.15, function(){
					this.swiper = new Swiper('#'+this.id+' .swiper-container', this.settings);
			}, [], this);
		}

		return this;

	},
	handleResize: function(){
		this.el.setAttribute("style", "height:"+document.body.clientHeight+"px");
		if(this.ratio != undefined){
			let newWidth = this.ratio.clientWidth,
					newHeight = newWidth/16*9;
			this.ratio.setAttribute("style", "height:"+newHeight+"px;");
		}
	},
	handleMouseWheel: function(event){
		let self = this;
		let e = window.event || event || event.originalEvent;
		let delta = e.deltaY || e.wheelDelta;

		// FF Y-Achse
		if(e.axis == 2){
			delta = 3*e.detail;
		}
		if(delta < 0){
			self.bottomend = false;
			if(self.caseBody._gsTransform && self.caseBody._gsTransform.y-delta > 0){
					TweenMax.to(self.caseBody, 0.1, {y:0, overwrite:true});
			} else {
				TweenMax.set(this.caseBody, {y:`-=${delta}`});
			}
		} else if(delta > 0) {
			self.topend = false;
			let cH = document.body.clientHeight,
					bH = self.caseBody.clientHeight,
					dH = cH-bH;
			if(self.caseBody._gsTransform && self.caseBody._gsTransform.y-delta < cH-bH){
					TweenMax.to(self.caseBody, 0.1, {y:dH, overwrite:true});
			} else {
				TweenMax.set(self.caseBody, {y:`-=${delta}`});
			}
		}

	}
})

export default Case;
