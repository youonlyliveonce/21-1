import Base from '../base';

let Case = Base.extend({
	props: {
		id: ['string', true, '']
		,isscrollable: ['boolean', true, true]
		,parentview: ['object', true, function(){ return {} }]
		,topend: ['boolean', true, true]
		,bottomend: ['boolean', true, false]
	},

	events: { },

	render: function(){
		this.cacheElements({
				caseBody: '.Case__body',
				ratio : '.Videobox__background'
		});
		this.on('change:active', this.onActiveChange, this);

		return this;

	},
	onActiveChange: function(view, value){
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
		let e = window.event || e || e.originalEvent;
		let delta = e.wheelDelta || e.deltaY || e.detail;
				delta = -1*delta;

		let self = this;
		if(delta < 0){
			self.bottomend = false;
			if(self.caseBody._gsTransform && self.caseBody._gsTransform.y+(-1*delta) > 0){
					if(self.topend && delta<-10){
						// self.parentview.previousSlide()
						self.topend = false
					}
					if(self.caseBody._gsTransform.y == 0){
						self.topend = true;
					} else {
						TweenMax.to(self.caseBody, 0.1, {y:0, overwrite:true, onComplete:function(){
							self.topend = true;
						}});
					}
			} else {
				TweenMax.set(this.caseBody, {y:`+=${-1*delta}`});
			}
		} else {
			self.topend = false;
			let cH = document.body.clientHeight,
					bH = self.caseBody.clientHeight,
					dH = cH-bH;

			if(self.caseBody._gsTransform && self.caseBody._gsTransform.y-delta < cH-bH){
				if(self.bottomend && delta>10){
					// self.parentview.nextSlide()
					self.bottomend = false;
				} else {
					TweenMax.to(self.caseBody, 0.1, {y:dH, overwrite:true, onComplete:function(){
							self.bottomend = true;
					}});
				}
			} else {
				TweenMax.set(self.caseBody, {y:`-=${delta}`});
			}
		}

	}
})

export default Case;
