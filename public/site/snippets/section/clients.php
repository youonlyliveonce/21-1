<?php
	$clients = $section->clients()->structure();
	$clientsrows = $clients->chunk(6);

?>
<div class="Linkgrid [ Element ]" id="<?php echo $section->slug(); ?>" data-view="LinkGridView">
	<div class="Linkgrid__background"></div>
		<div class="Linkgrid__header"></div>
		<div class="Linkgrid__body">
			<?php foreach($clientsrows as $row): ?>
				<div class="Linkgrid__row">
					<?php foreach($row as $item): ?>
						<div>
							<figure>
								<img src="<?php echo $section->image($item->logo())->url(); ?>" alt="<?php echo html($item->alttext()) ?>">
							</figure>
						</div>
					<?php endforeach ?>
				</div>
			<?php endforeach ?>
		</div>
		<?php snippet('down',  array('section' => $section)) ?>
</div>
