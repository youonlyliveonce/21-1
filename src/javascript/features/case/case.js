import Base from '../base';

let Case = Base.extend({
	props: {
		id: ['string', true, '']
		,filter: ['object', true, function(){ return {}; }]
		,filteritems: ['array', true, function(){ return []; }]
		,isscrollable: ['boolean', true, true]
		,parentview: ['object', true, function(){ return {} }]
		,topend: ['boolean', true, true]
		,bottomend: ['boolean', true, false]
	},

	events: {
		'click .Portfolio__filter ul li':'handleClickFilter'
	},

	render: function(){
		this.cacheElements({
				caseBody: '.Case__body',
				gridFilter: '.Portfolio__filter'
		});
		this.filteritems = this.queryAll('.Portfolio__filter li');
		this.on('change:active', this.onActiveChange, this);
		TweenMax.to('.check-grey', 0.25, {drawSVG:"0% 0%"});

		return this;

	},
	onActiveChange: function(view, value){
		if(!value) {
			// TweenMax.to(this.caseBody, 0.1, {y:0, overwrite:true, onComplete:function(){
			// 	this.topend = true;
			// }});
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
