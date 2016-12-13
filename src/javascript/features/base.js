import View from 'ampersand-view';

let Base = View.extend({
	props: {
		id: ['string', true, '']
		,active: ['boolean', true, true]
		,isscrollable: ['boolean', true, false]
		,parentview: ['object', true, function(){ return {} }]
	},
	events: {},

	render: function(){
		this.on('change:active', this.onActiveChange, this);
	},
	handleResize: function(){
		this.el.setAttribute("style", "height:"+document.body.clientHeight+"px");
	},
	onActiveChange: function(value){
		console.log(value)
	},
	handleMouseWheel: function(event){
		let e = window.event || e || e.originalEvent;
		let value = e.wheelDelta || -e.deltaY || -e.detail;
		let delta = Math.max(-20, Math.min(20, value));
		if(delta < -10){
			this.parentview.nextSlide()
		} else if(delta > 10) {
			this.parentview.previousSlide()
		}
	}
})

export default Base;
