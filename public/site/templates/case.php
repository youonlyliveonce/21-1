<?php snippet('head') ?>
<?php snippet('view-start', array('pageclass' => " Page--single"))?>

<div class="Case [ Element ]" id="<?php echo $page->slug(); ?>"  data-view="CaseView">
	<a href="<?= $parentlink ?>" class="Button--close"><span></span></a>
	<div class="Case__body">
	<?php if($hasvideo) : ?>
		<div class="Videobox__background">
				<iframe width="420" height="315" src="https://www.youtube.com/embed/<?= $page->videoid(); ?>?autoplay=1&enablejsapi=1&showinfo=0&controls=1"></iframe>
		</div>

	<?php else: ?>
		<?php if($isslideshow): ?>
			<div class="Case__slideshow">
				<div class="swiper-container">
					<div class="swiper-wrapper">
					<?php foreach($slides as $slide): ?>
						<div class="swiper-slide">
							<?php if($image = $page->image($slide['img'])) echo $image->html() ?>
						</div>
					<?php endforeach; ?>
					</div>
				</div>
			</div>
			<!-- Slider -->
		<?php else: ?>
			<!-- Single Image -->
			<div class="Case__image">
				<?php if($image = $page->image($slides[0]['img'])) echo $image->html() ?>
			</div>
		<?php endif; ?>
	<?php endif; ?>
	<div class="Case__info">
	</div>
	<!-- Beschreibung -->
	<div class="Case__intro">
		<div>
			<h1><?= $page->headline(); ?></h1>
		</div>
		<div>
			<?php if(!$page->subline()->empty()) :?>
				<h2><?= $page->subline(); ?></h2>
			<?php endif; ?>
			<?= $page->description()->kirby(); ?>
		</div>
	</div>
	<!-- Moodboard -->



	<!-- Backlink -->
		<div class="Case__back">
			<a href="<?= $parentlink ?>"><span>Zurück zur Übersicht</span></a>
		</div>
	</div>
</div>



<?php snippet('view-end')?>
<?php snippet('footer') ?>
