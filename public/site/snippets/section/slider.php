<?php
	$slides = $section->slider()->toStructure();
?>

<div class="Slider [ Element ]" id="<?php echo $section->slug(); ?>"  data-view="SliderView">
		<div class="swiper-container">
				<div class="swiper-wrapper">
				<?php foreach($slides as $slide): ?>
					<div class="swiper-slide">
						<div class="Slider__background"  style="background-image:url(<?= $slide->background()->toFile()->url(); ?>)"> </div>
					</div>
				<?php endforeach; ?>
				</div>

			</div>
		<?php snippet('right') ?>
		<?php snippet('left') ?>
		<?php snippet('down') ?>
</div>
