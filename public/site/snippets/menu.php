<nav class="Navigation" role="navigation">
	<ul>
		<?php $rooturi = ($page->uri() == 'home') ? '' : '/'.$page->uri(); ?>
		<?php foreach($page->children()->visible() as $item): ?>
			<?php if($item->navigation() == "main"): ?>
				<?php if($item->intendedTemplate() == 'redirect'): ?>
					<li>
						<a href="<?= $item->redirect(); ?>" target="_blank"><span><?= $item->title()->html() ?><span></a>
					</li>
				<?php else : ?>
					<?php if((!$item->preview()->exists())||($item->preview()->bool()&&($user = $site->user()))||!$item->preview()->bool()): ?>
					<li>
						<a href="/<?= $site->language() ?><?= $rooturi ?>/?section=<?= $item->slug(); ?>"><span><?= $item->title()->html() ?><span></a>
					</li>
					<?php endif; ?>
				<?php endif; ?>
			<?php endif; ?>
		<?php endforeach; ?>
	</ul>
	<ul class="Navigation__third">
		<?php foreach($page->children()->visible() as $item): ?>
			<?php if($item->navigation() == "third"): ?>
				<?php if($item->intendedTemplate() == 'redirect'): ?>
					<li>
						<a href="<?= $item->redirect(); ?>" target="_blank"><span><?= $item->title()->html() ?><span></a>
					</li>
				<?php else : ?>
					<?php if((!$item->preview()->exists())||($item->preview()->bool()&&($user = $site->user()))||!$item->preview()->bool()): ?>
						<li>
							<a href="/<?= $site->language() ?><?= $rooturi ?>/?section=<?= $item->slug(); ?>"><span><?= $item->title()->html() ?><span></a>
						</li>
					<?php endif; ?>
				<?php endif; ?>
			<?php endif; ?>
		<?php endforeach; ?>
	</ul>
</nav>

<nav class="Scrollnavigation">
	<ul>
		<?php foreach($page->children()->visible() as $item): ?>
			<?php if($item->intendedTemplate() != 'redirect' && ($item->navigation() == "main" || $item->navigation() == "third")): ?>
				<?php if((!$item->preview()->exists())||($item->preview()->bool()&&($user = $site->user()))||!$item->preview()->bool()): ?>
					<li class="<?php if(!$item->scrollable()->empty()) : echo 'Scrollnavigation__item--large'; endif; ?>">
						<a href="/<?= $site->language() ?><?= $rooturi ?>/?section=<?= $item->slug(); ?>"><span><?= $item->title()->html() ?></span></a>
					</li>
				<?php endif; ?>
			<?php endif; ?>
		<?php endforeach ?>
	</ul>
</nav>
