<?php snippet('head') ?>

<?php snippet('view-start')?>

			<?php
				if($page->isErrorPage()){
					?>
					<div class="TextBlock TextBlock--center">
						<div class="TextBlock-body">
							<div>
									<h2><?php echo $page->title() ?></h2>
									<?php echo $page->text()->kt() ?>
							</div>
						</div>
					</div>
			<?php
			} else {
				$sections = $page->children();
				foreach($sections as $section):
						if($section->section()):
								$snippet = implode("/", explode("_", $section->intendedTemplate()));
								snippet($snippet, array('section' => $section));
						endif;
				endforeach;
			}
			?>

<?php snippet('view-end')?>
<?php snippet('footer') ?>
