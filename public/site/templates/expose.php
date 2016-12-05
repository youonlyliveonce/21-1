<?php snippet('head') ?>

<?php snippet('view-start')?>

<?php
	$billboardtype = $page->showvideo()->bool() ? "Billboard--video" : "Billboard--image";
	$videos = $page->covervideo()->toStructure();
?>
<div class="Billboard <?php echo $billboardtype; ?>">
	<div class="Billboard-background">
		<img class="Billboard-ratio" src="http://media.cadman.de/16x9.png">
		<?php if(page->showvideo()->bool()) : >
			<?php foreach($videos as $video): ?>
				<video loop="loop" autoplay="autoplay">
					<source type="video/mp4" src="<?php echo $video->mp4(); ?>" />
					<source type="video/webm" src="<?php echo $video->webm(); ?>" />
				</video>
			<?php endforeach; ?>
	<?php else : ?>
		<div class="Billboard-visual" style="background-image: url(http://media.cadman.de/<?php echo $page->poster() ?>-l.jpg);"></div>
	<?php endif; ?>
	</div>
	<div class="Billboard-body<?php if(!$page->heroclass()->empty() ){ echo "Billboarc-body--".$page->heroclass() } ?>">
		<div class="Billboard-logo">
			<h1>
				<?php if($page->logo()-empty()) :  ?>
					<span class="cm-billboard-alternate">{{{headline}}}</span>
				<?php else: ?>
					<img src="http://media.cadman.de/<?php echo $page->logo() ?>.png" alt="<?php echo $page->headline() ?>">
				<?php endif; ?>
			</h1>
			<div class="Billboard-intro">
				<p><?php echo $page-description() ?></p>
			</div>
					<?php if($page->hasVisibleChildren()) ?>
						<div class="Billboard-nav">
								<ul>
									<?php
										$sections = $page->children();
										foreach($sections as $section):
									?>
											<li><a href="#<?php echo $section->id(); ?>"><?php echo $section->title(); ?></a></li>
									<?php
										endforeach;
									?>
								</ul>
						</div>
					<?php endif; ?>
			</div>
		</div>
	</div>
</div>


	<?php
		// $sections = $page->children();
		foreach($sections as $section):
				if($section->section()):
						$snippet = implode("/", explode("_", $section->intendedTemplate()));
						snippet($snippet, array('section' => $section));
				endif;
		endforeach;
	?>

<?php snippet('view-end')?>
<?php snippet('footer') ?>
