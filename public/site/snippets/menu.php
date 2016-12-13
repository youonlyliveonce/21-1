<nav class="Navigation" role="navigation">
  <ul>
    <?php foreach($site->page('home')->children()->visible() as $item): ?>
    <li>
      <a href="/<?= $site->language() ?>/?section=<?= $item->slug(); ?>"><span><?= $item->title()->html() ?><span></a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>

<nav class="Scrollnavigation">
  <ul>
    <?php foreach($site->page('home')->children()->visible() as $item): ?>
    <li class="<?php if(!$item->scrollable()->empty()) : echo 'Scrollnavigation__item--large'; endif; ?>">
      <a href="/<?= $site->language() ?>/?section=<?= $item->slug(); ?>"><span><?= $item->title()->html() ?></span></a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>
