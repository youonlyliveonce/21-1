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
		let e = window.event || event || event.originalEvent;
		let delta = e.deltaY || -1*e.wheelDelta;

		// FF Y-Achse
		if(e.axis == 2){
			delta = 2*e.detail;
		}
		console.log(e.deltaY);
		console.log(delta, e);

		if(delta < -19){
			this.parentview.previousSlide()
		} else if(delta > 19) {
			this.parentview.nextSlide()
		}
	}
})

export default Base;
