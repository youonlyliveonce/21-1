import PageView from './base';


let Content = PageView.extend({

	props:{
		isInitial: ['boolean', true, false]
		,isScrollTop: ['boolean', true, false]
	},

	events: {

	},

	hookBeforeHide: function(){

	},

	hookInRender: function () {
		var self = this;
		this.cacheElements({
			ratio : '.Videobox--video div'
		});
		TweenMax.delayedCall(0.8, function(){
				self.bindSlider('.swiper-container', 'basic');
		});
	},
	handleResize: function(){
		if(this && this.ratio){
			var newWidth = document.body.clientHeight/9*16,
					newHeight = document.body.clientHeight;
			if(newWidth < document.body.clientWidth) {
				newWidth = document.body.clientWidth,
				newHeight = document.body.clientWidth/16*9;
			}
			this.ratio.setAttribute("style", "width:"+newWidth+"px; height:"+newHeight+"px;");
		}
	},
	hookAfterShow: function(){

	}
});

export default Content;
