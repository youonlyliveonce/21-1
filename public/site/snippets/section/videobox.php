<?php

?>
<div class="Videobox [ Element ]" id="<?php echo $section->slug(); ?>"  data-view="VideoView">
	<div class="Videobox__background">
			<iframe width="420" height="315" src="https://www.youtube.com/embed/<?= $section->videoid(); ?>?autoplay=0&enablejsapi=1&loop=1&playlist=<?= $section->videoid(); ?>&showinfo=0&controls=0&enablejsapi=1"></iframe>
	</div>
	<div class="Videobox__body">

		<?php snippet('mute'); ?>

	</div>
	<?php snippet('down',  array('section' => $section, 'label' => 'scroll')) ?>
</div>
