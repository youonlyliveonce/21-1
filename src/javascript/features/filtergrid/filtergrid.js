import Base from '../base';

let Filtergrid = Base.extend({
	props: {
		id: ['string', true, ''],
		filter: ['object', true, function(){ return {}; }]
	},
	events: {},

	render: function(){
		this.on('change:active', this.onActiveChange, this);
	},

	onActiveChange: function(value){
		console.log(value)
	}
})

export default Filtergrid;
