<?php snippet('head') ?>
<?php snippet('view-start', array('pageclass' => " Page--single"))?>

<div class="Case [ Element ]" id="<?php echo $page->slug(); ?>"  data-view="CaseView">
	<?php if($page->videoid()->isEmpty()) : ?>
		<?php if(): ?>
			/* Slider */
		<?php endif; ?>
	<?php else: ?>
		<div class="Videobox__background">
				<iframe width="420" height="315" src="https://www.youtube.com/embed/<?= $page->videoid(); ?>?autoplay=1&enablejsapi=1&showinfo=0&controls=1"></iframe>
		</div>
	<?php endif; ?>

	/* Beschreibung */

	/* Moodboard */

	/* Backlink */

</div>



<?php snippet('view-end')?>
<?php snippet('footer') ?>
