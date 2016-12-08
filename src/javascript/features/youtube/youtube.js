import Base from '../base';

let YoutubePlayer = Base.extend({
	props: {
		id: ['string', true, '']
		,player: ['object', true, function(){ return {}; }]
		,active: ['boolean', true, false]
		,ready: ['boolean', true, false]
		,isscrollable: ['boolean', true, false]
	},
	events: {},

	render: function(){
		this.cacheElements({
			ratio : '.Videobox__background'
		});

		// INSERT YOUTUBE API
		let tag = document.createElement('script');
				tag.src = "https://www.youtube.com/iframe_api";
		let firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		this.on('change:active', this.onActiveChange, this);
		window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
		return this;
	},

	onYouTubeIframeAPIReady: function(){
		this.player = new YT.Player(this.id, {
					events: {
						'onReady': this.onPlayerReady.bind(this),
						'onStateChange': this.onPlayerStateChange.bind(this)
					}
				});
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
		console.log("onActiveChange", value);
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
