import View from 'ampersand-view';

let Base = View.extend({
	props: {
		id: ['string', true, '']
		,active: ['boolean', true, true]
		,isscrollable: ['boolean', true, false]
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
	}
})

export default Base;
