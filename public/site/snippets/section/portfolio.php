<?php
	$filtertags = $section->children()->pluck('filtertags', ',', true);
?>
<div class="Portfolio [ Element ]" id="<?php echo $section->slug(); ?>" data-view="GridView">
		<div class="Portfolio__filter">
			<ul>
				<li data-filter="all"><span>FILTER</span></li>
				<?php foreach($filtertags as $filter): ?>
				<li data-filter="<?= str_replace("/", "-", $filter) ?>" class="active">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.116 0 10.229 9.021" enable-background="new -0.116 0 10.229 9.021" xml:space="preserve">
					<polyline class="check-grey" fill="none" stroke="#484848" stroke-width="2.5" stroke-miterlimit="10" points="9.177,0.896 3.55,7.056 0.876,4.184 "/>
					<polyline class="check-white" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-miterlimit="10" points="9.177,0.896 3.55,7.056 0.876,4.184 "/>
					</svg> <span><?= $filter ?></span>
				</li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="Portfolio__body [ Film Interactive-Design Concept Animation-VFX-3D ]">
			<div class="Portfolio__item [ Film ]">
				<div style="background-image: url('/assets/images/pic1.jpg')">
					<span></span>
					<h2>UNTOUCHED VELVET</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--small [ Interactive-Design ]">
				<div style="background-image: url('/assets/images/pic2.jpg')">
					<span></span>
					<h2>RALP LOREN</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--medium Portfolio__item--right [ Interactive-Design Film ]">
				<div style="background-image: url('/assets/images/pic3.jpg')">
					<span></span>
					<h2>LANCOM – <br/>GLOSS IN<br/>LOVE</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--small [ Concept ]">
				<div style="background-image: url('/assets/images/pic4.jpg')">
					<span></span>
					<h2>SUBSTRAL – MAGISCHER ERDENZAUBER</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--medium [ Concept ]">
				<div style="background-image: url('/assets/images/pic5.jpg')">
					<span></span>
					<h2>PREMIUM TUTORIAL WITH LENA GERKE</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny [ Concept ]">
				<div style="background-image: url('/assets/images/pic6.jpg')">
					<span></span>
					<h2>NAILWALK</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny [ Interactive-Design ]">
				<div style="background-image: url('/assets/images/pic7.jpg')">
					<span></span>
					<h2>VODFONE TUTORIALS</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--small [ Animation-VFX-3D ]">
				<div style="background-image: url('/assets/images/pic8.jpg')">
					<span></span>
					<h2>L'OREÁL TUTORIALS</h2>
				</div>
			</div>
			<div class="Portfolio__item [ Film ]">
				<div style="background-image: url('/assets/images/pic10.jpg')">
					<span></span>
					<h2>REEL 2016</h2>
				</div>
			</div>

			<div class="Portfolio__item Portfolio__item--medium [ Animation-VFX-3D ]">
				<div style="background-image: url('/assets/images/pic2.jpg')">
					<span></span>
					<h2>RALP LOREN</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--small [ Film ]">
				<div style="background-image: url('/assets/images/pic3.jpg')">
					<span></span>
					<h2>LANCOM – <br/>GLOSS IN<br/>LOVE</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny [ Interactive-Design ]">
				<div style="background-image: url('/assets/images/pic5.jpg')">
					<span></span>
					<h2>PREMIUM TUTORIAL WITH LENA GERKE</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny [ Concept ]">
				<div style="background-image: url('/assets/images/pic6.jpg')">
					<span></span>
					<h2>NAILWALK</h2>
				</div>
			</div>

			<div class="Portfolio__item Portfolio__item--tiny [ Animation-VFX-3D ]">
				<div style="background-image: url('/assets/images/pic9.jpg')">
					<span></span>
					<h2>UNTOUCHED VELVET</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--tiny [ Concept ]">
				<div style="background-image: url('/assets/images/pic7.jpg')">
					<span></span>
					<h2>VODFONE TUTORIALS</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--medium Portfolio__item--right [ Concept Film ]">
				<div style="background-image: url('/assets/images/pic6.jpg')">
					<span></span>
					<h2>NAILWALK</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--small [ Concept Film ]">
				<div style="background-image: url('/assets/images/pic4.jpg')">
					<span></span>
					<h2>SUBSTRAL – MAGISCHER ERDENZAUBER</h2>
				</div>
			</div>


			<div class="Portfolio__item Portfolio__item--medium [ Animation-VFX-3D ]">
				<div style="background-image: url('/assets/images/pic9.jpg')">
					<span></span>
					<h2>UNTOUCHED VELVET</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--small [ Concept Film ]">
				<div style="background-image: url('/assets/images/pic2.jpg')">
					<span></span>
					<h2>RALP LOREN</h2>
				</div>
			</div>
			<div class="Portfolio__item Portfolio__item--small [ Film ]">
				<div style="background-image: url('/assets/images/pic3.jpg')">
					<span></span>
					<h2>LANCOM – <br/>GLOSS IN<br/>LOVE</h2>
				</div>
			</div>

		</div>
		<?php snippet('down') ?>
</div>
