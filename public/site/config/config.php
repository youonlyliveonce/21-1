<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/
thumb::$defaults['memory'] = '256MB';
c::set('debug',true);
c::set('languages', array(
	array(
		'code'		=> 'de',
		'name'		=> 'Deutsch',
		'default' => true,
		'locale'	=> 'de_DE',
		'url'			=> '/de/',
	),
	array(
		'code'		=> 'en',
		'name'		=> 'English',
		'locale'	=> 'en_US',
		'url'		 	=> '/en/',
	)
));

// c::set('language.detect', true);
