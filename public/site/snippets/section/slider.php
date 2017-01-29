<?php
	$slides = $section->slider()->toStructure();
	$isslider = count($slides) > 1;
	if($isslider){
		$hastextbox = count($slides->filter(function($slide){
			return $slide->textbox()->isNotEmpty();
		})) > 1;
	} else {
		$hastextbox = $slides->first()->textbox()->isNotEmpty();
	}

?>

<div class="Slider [ Element ]<?php if($hastextbox) echo " Slider--textbox" ?>" id="<?php echo $section->slug(); ?>"  data-view="SliderView">
	<div class="Slider__headline"><span><?= $section->title(); ?></span></div>
	<div class="Slider__body">
		<div class="Slider__layer <?php echo 'Slider__layer--'.$section->animation(); ?>">
			<?php foreach($slides as $slide): ?>
				<?php $title = str_split($slide->title()); ?>
				<?php $subtitle = str_split($slide->subtitle()); ?>
				<?php $description = str_split($slide->description()); ?>
				<div>
					<h1><?php foreach($title as $item): ?><span><span class="letter"><?php if($item=='$'){ echo('&nbsp;'); }else{echo $item; }?></span></span><?php endforeach; ?></h1>
					<h2><?php foreach($subtitle as $item): ?><span><span class="letter"><?php if($item=='$'){ echo('&nbsp;'); }else{echo $item; }?></span></span><?php endforeach; ?></h2>
					<h3><?php foreach($description as $item): ?><span><span class="letter"><?php if($item=='$'){ echo('&nbsp;'); }else{echo $item; }?></span></span><?php endforeach; ?></h3>
					<?php if($slide->textbox()->isNotEmpty()): ?>
						<div class="Textbox">
							<div class="Textbox__wrapper">
								<div class="Textbox__body">
									<?= $slide->textbox()->kt() ?>
								</div>
							</div>
							<div class="Textbox__scroller"><span></span></div>
						</div>
					<?php endif; ?>
					<?= $slide->svg(); ?>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
			<?php foreach($slides as $slide): ?>
				<div class="swiper-slide">
					<div class="Slider__background" style="background-image:url(<?= $slide->background()->toFile()->url(); ?>)"> </div>
				</div>
			<?php endforeach; ?>
			</div>
			<div class="swiper-pagination"></div>

		</div>
		<div class="Contentnavigation">
			<div class="Contentnavigation__background"></div>
			<?php if(count($slides) > 1): ?>
				<?php snippet('left') ?>
				<?php snippet('right') ?>
				<div class="Button--contentnavi">
					<span></span>
				</div>
				<?php endif; ?>
			<div class="Contentnavigation__body">
				<ul>
					<?php foreach($slides as $index => $slide): ?>
						<li data-index="<?= $index ?>">
							<span><?= thumb($slide->background()->toFile(), array('width' => 160, 'height' => 90, 'crop' => true)); ?></span>
							<?= $slide->label(); ?>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>
	</div>
	<?php snippet('down',  array('section' => $section)) ?>
</div>
