import Base from '../base';

let Slider = Base.extend({
	props: {
		id: ['string', true, '']
		,filter: ['object', true, function(){ return {}; }]
		,isscrollable: ['boolean', true, true]
		,parentview: ['object', true, function(){ return {} }]
		,swiper: ['object', true, function(){ return {} }]
		,settings: ['object', true, function(){ return {
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
						spaceBetween: 0,
						slidesPerView: 1
					}
				}]

	},

	events: { },

	render: function(){
		this.cacheElements({ });
		this.on('change:active', this.onActiveChange, this);
		this.swiper = new Swiper('.swiper-container', this.settings);
		return this;

	},
	onActiveChange: function(view, value){

	},
	handleResize: function(){
		// var newWidth = document.body.clientHeight/9*16,
		// 		newHeight = document.body.clientHeight;
		// if(newWidth < document.body.clientWidth) {
		// 	newWidth = document.body.clientWidth,
		// 	newHeight = document.body.clientWidth/16*9;
		// }
		// this.el.setAttribute("style", "height:"+document.body.clientHeight+"px");
		// this.ratio.setAttribute("style", "width:"+newWidth+"px; height:"+newHeight+"px;");
	}

})

export default Slider;
