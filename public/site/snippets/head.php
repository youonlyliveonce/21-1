<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	<title><?php echo $site->title()->escape() ?> | <?php echo $page->title()->escape() ?></title>
	<meta name="description" content="<?php echo $site->description()->html() ?>">
	<meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

	<link rel="shortcut icon" href="http://media.cadman.de/favicon.ico">
	<link rel="apple-touch-icon-precomposed" href="http://media.cadman.de/ico_29-29.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://media.cadman.de/ico_72-72.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://media.cadman.de/ico_114-114.png">

	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="HandheldFriendly" content="true">

	<script>
		(function(d) {
			var config = {
				kitId: 'uet7ium',
				scriptTimeout: 3000,
				async: true
			},
			h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
		})(document);
	</script>
	<style>
			.preloader {
				text-align:center;
				position: fixed;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: 111110;
			}
			.preloader .curtain {
				background-color: #000;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
				-webkit-transition: opacity .75s;
				-moz-transition: opacity .75s;
				-ms-transition: opacity .75s;
				transition: opacity .75s;
			}
			.preloader .curtain {
				background-color: #000;
				-moz-transition: opacity .75s;
				-ms-transition: opacity .75s;
				transition: opacity .75s;
			}
			.newload {
				overflow: hidden
			}
			.newload .preloader,
			.loading .preloader,
			.hideloader .preloader,
			.loaded .preloader {
				z-index: 99999;
			}
			.newload .preloader .curtain,
			.loading .preloader .curtain,
			.loaded .preloader .curtain {
				opacity: 1;
			}
			.hideloader .preloader .curtain {
				opacity: 0;
			}
			.preloader .loader {
				display: inline-block;
				width: 96%;
				height: 100%;
				position: relative;
				top: 0%;
				animation: loader 2s infinite ease;
				-webkit-animation: loader 2s infinite ease;
				-moz-animation: loader 2s infinite ease;
				-o-animation: loader 2s infinite ease;
			}
			.preloader .loader-inner {
				vertical-align: top;
				display: inline-block;
				width: 100%;
				background-color: white;
				animation: loader-inner 2s infinite ease-in;
				-webkit-animation: loader-inner 2s infinite ease-in;
				-moz-animation: loader-inner 2s infinite ease-in;
				-o-animation: loader-inner 2s infinite ease-in;
			}

			@keyframes loader {
				0% {
					transform: rotate(0deg);
					-webkit-transform: rotate(0deg);
					-ms-transform: rotate(0deg);
				}

				25% {
					transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
				}

				50% {
					transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
				}

				75% {
					transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
				}

				100% {
					transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
				}
			}
			@-webkit-keyframes loader {
				0% {
					transform: rotate(0deg);
					-webkit-transform: rotate(0deg);
					-ms-transform: rotate(0deg);
				}

				25% {
					transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
				}

				50% {
					transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
				}

				75% {
					transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
				}

				100% {
					transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
				}
			}
			@-mos-keyframes loader {
				0% {
					transform: rotate(0deg);
					-webkit-transform: rotate(0deg);
					-ms-transform: rotate(0deg);
				}

				25% {
					transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
				}

				50% {
					transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
				}

				75% {
					transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
				}

				100% {
					transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
				}
			}
			@-o-keyframes loader {
				0% {
					transform: rotate(0deg);
					-webkit-transform: rotate(0deg);
					-ms-transform: rotate(0deg);
				}

				25% {
					transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
				}

				50% {
					transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
				}

				75% {
					transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
				}

				100% {
					transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
				}
			}


			@keyframes loader-inner {
				0% {
					height: 0%;
				}

				25% {
					height: 0%;
				}

				50% {
					height: 100%;
				}

				75% {
					height: 100%;
				}

				100% {
					height: 0%;
				}
			}
			@-webkit-keyframes loader-inner {
				0% {
					height: 0%;
				}

				25% {
					height: 0%;
				}

				50% {
					height: 100%;
				}

				75% {
					height: 100%;
				}

				100% {
					height: 0%;
				}
			}
			@-moz-keyframes loader-inner {
				0% {
					height: 0%;
				}

				25% {
					height: 0%;
				}

				50% {
					height: 100%;
				}

				75% {
					height: 100%;
				}

				100% {
					height: 0%;
				}
			}
			@-o-keyframes loader-inner {
				0% {
					height: 0%;
				}

				25% {
					height: 0%;
				}

				50% {
					height: 100%;
				}

				75% {
					height: 100%;
				}

				100% {
					height: 0%;
				}
			}
	</style>

</head>
<body class="loading">

	<div class="preloader">
		<div class="curtain">
			<div class="loader">
				<div class="loader-inner"></div>
			</div>
		</div>
	</div>
