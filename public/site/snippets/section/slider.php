<?php
	$slides = $section->slider()->toStructure();
?>

<div class="Slider [ Element ]" id="<?php echo $section->slug(); ?>"  data-view="SliderView">
	<div class="Slider__body">
		<div class="swiper-container">
				<div class="swiper-wrapper">
				<?php foreach($slides as $slide): ?>
					<div class="swiper-slide">
						<img src="<?= $slide->background()->url(); ?>" alt="<?= $slide->title(); ?>">
					</div>
				<?php endforeach; ?>
				</div>
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
			</div>
	</div>
</div>
