<?php


return function($site, $pages, $page) {
	// backlink
	$parentlink = '/'.$site->language().'/?section='.$page->parent()->slug();

	// has video
	$hasvideo = !$page->videoid()->isEmpty();

	// var für Slides
	$slides = $page->slideshow()->yaml();
	$isslideshow = sizeof($slides) > 1;

	// var für Moodboard


	return compact('slides', 'isslideshow', 'hasvideo', 'parentlink');
};
