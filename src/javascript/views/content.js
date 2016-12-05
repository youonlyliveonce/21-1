import PageView from './base';


let Content = PageView.extend({

	props:{
		isInitial: ['boolean', true, false]
		,isScrollTop: ['boolean', true, false]
		// ,mapModel: 'object'
	},

	events: {

	},

	hookBeforeHide: function(){

	},

	hookInRender: function () {
		var self = this;
		// this.initResponsimg();
		this.cacheElements({
			billboard : '.Billboard video'
		});
		TweenMax.delayedCall(0.8, function(){
				self.bindSlider('.swiper-container', 'basic');
		});
		// TweenMax.delayedCall(0.15, function(){
		// 	self._renderMap( document.querySelector('#mapbox') );
		// })
	},
	hookAfterShow: function(){
		console.log("hookAfterShow");
		if(this.billboard){
			this.billboard.play();
			this._animateTypo();
		}

	},
	_animateTypo: function(){
		var typos = this.queryAll(".Billboard-body h1"),
			animateitem, lineobjects,
			animats = [], all = [], i = 0, j=0, k=0,
			tl = new TimelineMax({repeat:-1, repeatDelay:0.1}),
			objectIn, objectOut, objectStart, parentSetting;

			parentSetting = {perspective:500};
			objectIn = {
					textShadow:"0px 0px 0px rgb(255,255,255)",
					color:"transparent",
					opacity:1,
					scaleX:1,
					scaleY:1,
					rotationY:0,
					display:"block",
					ease:"Cubic.easeOut"
				};
				objectOut = {
					textShadow:"0px 0px 100px rgb(255,0,106)",
					color:"transparent",
					opacity:0,
					rotationY:-90,
					scaleX:1.8,
					scaleY:0.8,
					zIndex:10,
					display:"",
					delay:2
				};
				objectStart = {
					textShadow:"0px 0px 100px rgb(255,0,106)",
					color:"transparent",
					opacity:0,
					rotationY:90,
					scaleX:1.8,
					scaleY:0.8
				};
			console.log(typos);
			for(i;i<typos.length;i++){
				animats[i] = [];
				animateitem = typos[i];
				lineobjects = animateitem.getElementsByClassName("line");

				TweenMax.set(animateitem, parentSetting);
				for(j=0; j<lineobjects.length; j++){
					animats[i][j] = lineobjects[j];
					all.push(lineobjects[j]);
				}
			}

		// all.shift();
		console.log(all);

		tl.to(all, 0.01, objectStart);

		for(k;k<animats.length;k++){
			tl.staggerTo(animats[k], 2, objectIn, 0.3);
			tl.staggerTo(animats[k], 1, objectOut, 0.3);
		}

		tl.play();

	}

});

export default Content;
