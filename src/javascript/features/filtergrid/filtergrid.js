import Base from '../base';

let Filtergrid = Base.extend({
	props: {
		id: ['string', true, '']
		,filter: ['object', true, function(){ return {}; }]
		,isScrollAble: ['boolean', true, true]
		,scrollTimer: ['number', true, 0]
	},

	events: { },

	render: function(){
		// this.on('change:active', this.onActiveChange, this);
		this.cacheElements({
				gridBody: '.Portfolio__body',
				gridFilter: '.Portfolio__filter',
		});

		return this;

	},
	onActiveChange: function(value){
		// console.log(value);
	},
	handleScrollWheel: function(event){
		let self = this;

		if(event.deltaY < 0){
			if(self.gridBody._gsTransform && self.gridBody._gsTransform.y+(-1*event.deltaY) > 0){
				TweenMax.to(self.gridBody, 0.2, {y:0, overwrite:true});
			} else {
				TweenMax.set(this.gridBody, {y:`+=${-1*event.deltaY}`});
			}
		} else {
			let cH = document.body.clientHeight - self.gridFilter.clientHeight,
					bH = self.gridBody.clientHeight,
					dH = cH-bH;

			if(self.gridBody._gsTransform && self.gridBody._gsTransform.y-event.deltaY < cH-bH){
				TweenMax.to(self.gridBody, 0.2, {y:dH, overwrite:true});
			} else {
				TweenMax.set(self.gridBody, {y:`-=${event.deltaY}`});
			}
		}

	}
})

export default Filtergrid;
