import header from 'head';

class Loader {
	constructor () {
		// Singleton Object
		if(window.CM == null){
				window.CM = {};
		}
		window.CM.Loader = this;
		let scope = this;
		head.ready(document, function() {
				head.load([	"/assets/css/app.css",
										"/assets/js/app.js",
										"/assets/js/shim.js",
										"//fast.fonts.com/cssapi/6536d2ad-a624-4b33-9405-4c303cfb6253.css"
								], CM.Loader.startApplication);
		});
	}
	removeGFX (){
		document.body.setAttribute("class", document.body.getAttribute("class").split("hideloader").join("run"));
		CM.App.showPage();
		let preloader = document.getElementsByClassName("preloader")[0];
		if(preloader && preloader.parentNode){
				preloader.parentNode.removeChild(preloader);
		}
	}
	startApplication (){
		if(window.CM.App == undefined){
				setTimeout(CM.Loader.startApplication, 500);
		} else {
				CM.App.blastoff();
				document.body.setAttribute("class", document.body.getAttribute("class").split("loading").join("loaded") );
				setTimeout(function(){
				 document.body.setAttribute("class", document.body.getAttribute("class").split("loaded").join("hideloader") );
				}, 500);
				setTimeout(function(){ CM.Loader.removeGFX(); }, 1750);
		}
	}
};

export default new Loader();
