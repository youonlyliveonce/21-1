import Base from '../base';

let Filtergrid = Base.extend({
	props: {
		id: ['string', true, '']
		,filter: ['object', true, function(){ return {}; }]
		,filteritems: ['array', true, function(){ return []; }]
		,isscrollable: ['boolean', true, true]
		,parentview: ['object', true, function(){ return {} }]
		,topend: ['boolean', true, true]
		,bottomend: ['boolean', true, false]
		,mousebreak: ['boolean', true, false]
	},

	events: {
		'click .Portfolio__filter ul li':'handleClickFilter'
	},

	render: function(){
		this.cacheElements({
				gridBackground: '.Portfolio__background',
				gridBody: '.Portfolio__body',
				gridFilter: '.Portfolio__filter'
		});
		this.filteritems = this.queryAll('.Portfolio__filter li');
		this.on('change:active', this.onActiveChange, this);
		TweenMax.to('.check-grey', 0.25, {drawSVG:"0% 0%"});

		return this;

	},
	onActiveChange: function(view, value){
		this.mousebreak = false;
		this.topend = false;
		this.bottomend = false;
	},
	handleClickFilter: function(event){
		let target = event.delegateTarget,
				whiteSVGs = event.delegateTarget.getElementsByClassName('check-white'),
				greySVGs = event.delegateTarget.getElementsByClassName('check-grey'),
				filter = event.delegateTarget.dataset.filter;
		if(filter == "all"){
			for(let i=0; i<this.filteritems.length; i++){
				this.filteritems[i].classList.remove('active');
				this.filteritems[i].classList.add('active');
				if(this.filteritems[i].dataset.filter != "all"){
					this.gridBody.classList.add(this.filteritems[i].dataset.filter);
					this.showWhiteArrow(this.filteritems[i].getElementsByClassName('check-white'), this.filteritems[i].getElementsByClassName('check-grey'));
				}
			}
		} else {
			/* ISOLATE */
			for(let i=0; i<this.filteritems.length; i++){
				this.filteritems[i].classList.remove('active');
				// this.filteritems[i].classList.add('active');
				if(this.filteritems[i].dataset.filter != "all" && this.filteritems[i].dataset.filter != filter){
					this.gridBody.classList.remove(this.filteritems[i].dataset.filter);
					this.showGreyArrow(this.filteritems[i].getElementsByClassName('check-white'), this.filteritems[i].getElementsByClassName('check-grey'));
				}
			}
			target.classList.add('active');
			this.showWhiteArrow(whiteSVGs, greySVGs);
			this.gridBody.classList.add(filter);


			/* REDUCE */
			// this.gridBody.classList.toggle(filter);
			// target.classList.toggle('active');
			// if(target.classList.contains('active')){
			// 	this.showWhiteArrow(whiteSVGs, greySVGs);
			// } else {
			// 	this.showGreyArrow(whiteSVGs, greySVGs);
			// }
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
	delayMouseWheelBreak: function(){
		this.mousebreak = false;
		TweenMax.killDelayedCallsTo(this.setMouseWheelBreak);
		TweenMax.delayedCall(0.1, this.setMouseWheelBreak, [], this);
	},
	setMouseWheelBreak: function(){
		this.mousebreak = true;
	},
	flashBackground: function(){
		TweenMax.to(this.gridBackground, 0.15, {css: {'opacity':0.1}, yoyo:true, repeat:1});
	},

	handleMouseWheel: function(event){
		let e = window.event || e || e.originalEvent;
		let delta = e.wheelDelta || e.deltaY || e.detail;
				delta = -1*delta;

		let self = this;
		if(delta < 0){
			self.bottomend = false;
			if(self.gridBody._gsTransform && self.gridBody._gsTransform.y+(-1*delta) > 0){
					if(self.topend){
						if(self.mousebreak){
							self.parentview.previousSlide();
						} else {
							self.delayMouseWheelBreak();
						}
					} else if(!self.topend){
						self.topend = true;
						TweenMax.set(this.gridBody, {y:0});
						self.flashBackground();
						self.delayMouseWheelBreak();
					}
			} else {
				self.mousebreak = false;
				TweenMax.set(this.gridBody, {y:`+=${-1*delta}`});
			}
		} else {
			self.topend = false;

			let cH = document.body.clientHeight - self.gridFilter.clientHeight,
					bH = self.gridBody.clientHeight,
					dH = cH-bH;

			if(self.gridBody._gsTransform && self.gridBody._gsTransform.y-delta < cH-bH){
				if(self.bottomend){
					if(self.mousebreak){
						self.parentview.nextSlide();
					} else {
						self.delayMouseWheelBreak();
					}
				} else if(!self.bottomend) {
					self.bottomend = true;
					TweenMax.set(self.gridBody, {y:dH});
					self.flashBackground();
					self.delayMouseWheelBreak();
				}
			} else {
				self.mousebreak = false;
				TweenMax.set(self.gridBody, {y:`-=${delta}`});
			}
		}

	}
})

export default Filtergrid;
