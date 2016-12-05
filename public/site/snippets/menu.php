<nav class="Navigation" role="navigation">
  <ul>
    <?php foreach($pages->visible() as $item): ?>
    <li class="<?= r($item->isOpen(), ' active') ?>">
      <a href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>
