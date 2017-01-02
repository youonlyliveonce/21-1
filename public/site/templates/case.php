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
			<!-- Slider -->
			<div class="Case__slideshow">
				<div class="swiper-container">
					<div class="swiper-wrapper">
					<?php foreach($slides as $slide): ?>
						<div class="swiper-slide">
							<?php if($image = $page->image($slide['img'])) echo thumb($image, array('width' => 1010, 'height' => 564, 'crop' => true)); ?>
						</div>
					<?php endforeach; ?>
					</div>
					<div class="swiper-pagination"></div>
				</div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		<?php else: ?>
			<!-- Single Image -->
			<div class="Case__image">
				<?php if($image = $page->image($slides[0]['img'])) echo $image->html() ?>
			</div>
		<?php endif; ?>
	<?php endif; ?>
	<div class="Case__info">
	</div>
	<!-- Description -->
	<div class="Case__intro">
		<div>
			<h1><?= $page->headline(); ?></h1>
		</div>
		<div>
			<?php if(!$page->subline()->empty()) :?>
				<h2><?= $page->subline(); ?></h2>
			<?php endif; ?>
			<?= $page->description()->markdown(); ?>
		</div>
	</div>
	<!-- Moodboard -->
	<?php if($hasmoodboard): ?>
		<div class="Case__board">
			<?php foreach($gallery as $index => $item): ?>
				<?php if($index == 0): ?>
					<div class="Case__item Case__item--first">
						<div>
							<?php if($image = $page->image($gallery[0]['img'])) echo thumb($image, array('width' => 1010, 'height' => 564, 'crop' => true)); ?>
							<?php if($gallery[0]['caption'] != null): ?>
								<figcaption><?= $gallery[0]['caption'] ?></figcaption>
							<?php endif; ?>
						</div>
					</div>
				<?php else: ?>
					<div class="Case__item">
						<div>
							<?php if($image = $page->image($gallery[$index]['img'])):
								echo thumb($image, array('width' => 500, 'height' => 500, 'crop' => true));
								if($gallery[$index]['caption'] != null): ?>
									<figcaption><?= $gallery[$index]['caption'] ?></figcaption>
								<?php endif; ?>
							<?php endif; ?>
							<?php if($gallery[$index]['headline'] != null): ?>
								<div>
									<article>
										<h3><?= $gallery[$index]['headline'] ?></h3>
										<?= kirbytext($gallery[$index]['copy']) ?>
									</article>
								</div>
							<?php endif; ?>

						</div>
					</div>
				<?php endif; ?>

			<?php endforeach; ?>
		</div>
	<?php endif; ?>



	<!-- Backlink -->
		<div class="Case__back">
			<a href="<?= $parentlink ?>"><span>Zurück zur Übersicht</span></a>
		</div>
	</div>
</div>



<?php snippet('view-end')?>
<?php snippet('footer') ?>
