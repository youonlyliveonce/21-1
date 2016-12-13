import Base from '../base';

let Filtergrid = Base.extend({
	props: {
		id: ['string', true, '']
		,filter: ['object', true, function(){ return {}; }]
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
				gridBody: '.Portfolio__body',
				gridFilter: '.Portfolio__filter',
		});

		TweenMax.to('.check-grey', 0.25, {drawSVG:"0% 0%"});

		return this;

	},
	onActiveChange: function(value){
		// console.log(value);
	},
	handleClickFilter: function(event){
		let target = event.delegateTarget,
				whiteSVGs = event.delegateTarget.getElementsByClassName('check-white'),
				greySVGs = event.delegateTarget.getElementsByClassName('check-grey');
		target.classList.toggle('active');
		if(target.classList.contains('active')){
			this.showWhiteArrow(whiteSVGs, greySVGs);
		} else {
			this.showGreyArrow(whiteSVGs, greySVGs);
		}
	},
	showGreyArrow: function(white, grey){
		TweenMax.to(white[0], 0.25, {drawSVG:"100% 100%"});
		TweenMax.to(grey[0], 0.25, {drawSVG:"100% 0%", delay:0.25});
	},
	showWhiteArrow: function(white, grey){
		TweenMax.to(white[0], 0.25, {drawSVG:"0% 100%", delay:0.25});
		TweenMax.to(grey[0], 0.25, {drawSVG:"0% 0%"});
	},
	handleMouseWheel: function(event){
		event.preventDefault();

		let e = window.event || e || e.originalEvent;
		let delta = e.wheelDelta || e.deltaY || e.detail;
				delta = -1*delta;

		let self = this;
		if(delta < 0){
			self.bottomend = false;
			if(self.gridBody._gsTransform && self.gridBody._gsTransform.y+(-1*delta) > 0){
					if(self.topend){
						self.parentview.previousSlide()
						self.topend = false
					}
					if(self.gridBody._gsTransform.y == 0){
						self.topend = true;
					} else {
						TweenMax.to(self.gridBody, 0.2, {y:0, overwrite:true, onComplete:function(){
							self.topend = true;
						}});
					}
			} else {
				TweenMax.set(this.gridBody, {y:`+=${-1*delta}`});
			}
		} else {
			self.topend = false;
			let cH = document.body.clientHeight - self.gridFilter.clientHeight,
					bH = self.gridBody.clientHeight,
					dH = cH-bH;

			if(self.gridBody._gsTransform && self.gridBody._gsTransform.y-delta < cH-bH){
				if(self.bottomend){
					self.parentview.nextSlide()
				} else {
					self.bottomend = true;
					TweenMax.to(self.gridBody, 0.2, {y:dH, overwrite:true});
				}
			} else {
				TweenMax.set(self.gridBody, {y:`-=${delta}`});
			}
		}

	}
})

export default Filtergrid;