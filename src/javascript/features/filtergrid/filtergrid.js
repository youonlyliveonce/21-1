import Base from '../longbase';

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
		,timeto: ['array', true, function(){ return [] }]
		,iso: ['object', true, function(){ return {} }]
	},
	events: {
		'click .Portfolio__filter ul li':'handleClickFilter'
	},
	render: function(){
		this.cacheElements({
				gridBackground: '.Portfolio__background',
				gridBody: '.Portfolio__body',
				gridHead: '.Portfolio__filter'
		});
		this.filteritems = this.queryAll('.Portfolio__filter li');
		this.on('change:active', this.onActiveChange, this);
		TweenMax.to('.check-grey', 0.25, {drawSVG:"0% 0%"});

		this.iso = new Isotope( '.Portfolio__mansry', {
			itemSelector: '.Portfolio__item',
			percentPosition: true,
			masonry: {
				columnWidth: '.Portfolio__sizer'
			}
		});

		return this;

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
				if(this.filteritems[i].dataset.filter != "all"){
					// this.gridBody.classList.remove(this.filteritems[i].dataset.filter);
					this.showGreyArrow(this.filteritems[i].getElementsByClassName('check-white'), this.filteritems[i].getElementsByClassName('check-grey'));
				}
			}
			this.iso.arrange({
				// item element provided as argument
				filter: function( itemElem ) {
					// var number = itemElem.querySelector('.number').innerText;
					// return parseInt( number, 10 ) > 50;
					console.log(filter);
					console.log(itemElem.classList.contains(filter));
					return itemElem.classList.contains(filter);
				}
			});
			target.classList.add('active');
			this.showWhiteArrow(whiteSVGs, greySVGs);
			// TweenMax.delayedCall(0.75, function(){
			// 		this.gridBody.classList.add(filter);
			// }, [], this)



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
	}
})

export default Filtergrid;
