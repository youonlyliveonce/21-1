<?php
	$filtertags = $section->children()->pluck('filtertags', ',', true);
?>
<div class="Portfolio [ Element ]" id="S<?php echo $section->hash(); ?>" data-view="GridView">
		<div class="Portfolio__filter">
			<ul>
				<li data-filter="all"><span>FILTER</span></li>
				<?php foreach($filtertags as $filter): ?>
				<li data-filter="<?= $filter ?>" class="active">
					<svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.116 0 10.229 9.021" enable-background="new -0.116 0 10.229 9.021" xml:space="preserve">
					<polyline class="check-grey" fill="none" stroke="#484848" stroke-width="2.5" stroke-miterlimit="10" points="9.177,0.896 3.55,7.056 0.876,4.184 "/>
					<polyline class="check-white" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-miterlimit="10" points="9.177,0.896 3.55,7.056 0.876,4.184 "/>
					</svg> <span><?= $filter ?></span>
				</li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="Portfolio__body">
			<div class="Portfolio__item">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--small">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--medium Portfolio__item--right">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--small">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--medium">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--small">
				<div></div>
			</div>
			<div class="Portfolio__item">
				<div></div>
			</div>

			<div class="Portfolio__item Portfolio__item--medium">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--small">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny">
				<div></div>
			</div>

			<div class="Portfolio__item Portfolio__item--tiny">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--medium Portfolio__item--right">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--small">
				<div></div>
			</div>


			<div class="Portfolio__item Portfolio__item--medium">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--small">
				<div></div>
			</div>
			<div class="Portfolio__item Portfolio__item--small">
				<div></div>
			</div>

		</div>
</div>
