import Base from '../base';

let YoutubePlayer = Base.extend({
	props: {
		id: ['string', true, '']
		,videoid: ['string', true, '']
		,player: ['object', true, function(){ return {}; }]
		,active: ['boolean', true, false]
		,ready: ['boolean', true, false]
		,isscrollable: ['boolean', true, false]
		,parentview: ['object', true, function(){ return {}; }]
	},
	events: {},

	render: function(){
		let self = this;
		this.cacheElements({
			ratio : '.Videobox__background'
		});
		if(window.YT === undefined){
			window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
			// INSERT YOUTUBE API
			let tag = document.createElement('script');
					tag.src = "https://www.youtube.com/iframe_api";
					tag.id = "youtubeapi";
			let firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		} else {
			TweenMax.delayedCall(0.25, function(){
				self.onYouTubeIframeAPIReady();
			})
		}
		this.on('change:active', this.onActiveChange, this);

		return this;
	},

	onYouTubeIframeAPIReady: function(){
		this.player = new YT.Player(this.videoid, {
					events: {
						'onReady': this.onPlayerReady.bind(this),
						'onStateChange': this.onPlayerStateChange.bind(this)
					}
				});
		if(this.player.B){
			this.onPlayerReady();
		};
	},

	onPlayerReady: function(){
		this.ready = true;
		if(this.active){
			this.player.playVideo();
		}
	},

	playVideo: function(){
		this.player.playVideo();
	},
	pauseVideo: function(){
		this.player.pauseVideo();
	},
	onActiveChange: function(model, value){
		if(!value)
			this.player.pauseVideo();
		else {
			if(this.ready){
				this.player.playVideo();
			}
		}
	},
	onPlayerStateChange: function(event){
		console.log("onPlayerStateChange", event);
	},
	cleanup : function(){
		this.player.destroy();
	},
	handleResize: function(){
		var newWidth = document.body.clientHeight/9*16,
				newHeight = document.body.clientHeight;
		if(newWidth < document.body.clientWidth) {
			newWidth = document.body.clientWidth,
			newHeight = document.body.clientWidth/16*9;
		}
		this.el.setAttribute("style", "height:"+document.body.clientHeight+"px");
		this.ratio.setAttribute("style", "width:"+newWidth+"px; height:"+newHeight+"px;");
	}

});

export default YoutubePlayer;
