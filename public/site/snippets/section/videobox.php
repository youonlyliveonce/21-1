<?php
	$videos = $section->covervideo()->toStructure();
	$anis = $section->coverani()->toStructure();
?>
<div class="Billboard Billboard--video">
	<div class="Billboard-background">
		<img class="Billboard-ratio" src="http://media.cadman.de/16x9.png">
		<?php foreach($videos as $video): ?>
			<video loop="loop">
				<source type="video/mp4" src="<?php echo $video->mp4(); ?>" />
				<source type="video/webm" src="<?php echo $video->webm(); ?>" />
			</video>
		<?php endforeach; ?>
	</div>
	<div class="Billboard-body">
		<div class="Billboard-slogan">
			<?php foreach($anis as $ani): ?>
				<h1>
					<i class="line"><?php echo $ani->line1(); ?></i>
					<b class="line"><?php echo $ani->line2(); ?></b>
					<i class="line"><?php echo $ani->line3(); ?></i>
					<a class="line" href="<?php echo $ani->link(); ?>">– <?php echo $ani->linklabel(); ?> –</a></li>
				</h1>
			<?php endforeach; ?>
		</div>
	</div>
</div>
