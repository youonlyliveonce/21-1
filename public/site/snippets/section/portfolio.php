<?php
	$filtertags = $section->children()->pluck('filtertags', ',', true);
	$arrangements = $section->arrangement()->structure();
?>
<div class="Portfolio [ Element ]" id="<?php echo $section->slug(); ?>" data-view="FilterGridView">
	<div class="Portfolio__background"></div>
		<div class="Portfolio__filter">
			<ul>
				<li data-filter="all"><span>FILTER</span></li>
				<?php foreach($filtertags as $filter): ?>
				<li data-filter="<?= $filter ?>" class="active">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.116 0 10.229 9.021" enable-background="new -0.116 0 10.229 9.021" xml:space="preserve">
					<polyline class="check-grey" fill="none" stroke="#484848" stroke-width="2.5" stroke-miterlimit="10" points="9.177,0.896 3.55,7.056 0.876,4.184 "/>
					<polyline class="check-white" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-miterlimit="10" points="9.177,0.896 3.55,7.056 0.876,4.184 "/>
				</svg> <span><?= str_replace("-", "/", $filter) ?></span>
				</li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="Portfolio__body [ Film Interactive-Design Concept Animation-VFX-3D ]">
			<?php foreach($arrangements as $arrangement):

					$snippet = 'tiny/case_teaser';
					$design = $arrangement->design();
					$first = $site->page($section->uri().'/'.$arrangement->firstitem());
					if($arrangement->seconditem()->isNotEmpty()):
						$second = $site->page($section->uri().'/'.$arrangement->seconditem());
					endif;
					if($arrangement->thirditem()->isNotEmpty()):
						$third = $site->page($section->uri().'/'.$arrangement->thirditem());
					endif;
					if($arrangement->fourthitem()->isNotEmpty()):
						$fourth = $site->page($section->uri().'/'.$arrangement->fourthitem());
					endif;

					if($design == 'hero'):
						snippet($snippet, array('item' => $first, 'itemclass' => '', 'thumb' => 'large'));
					elseif($design == '1-1'):
						 snippet($snippet, array('item' => $first, 'itemclass' => 'Portfolio__item--medium ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $second, 'itemclass' => 'Portfolio__item--medium ', 'thumb' => 'square'));
					elseif($design == '1-2'):
						 snippet($snippet, array('item' => $first, 'itemclass' => 'Portfolio__item--medium ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $second, 'itemclass' => 'Portfolio__item--small ', 'thumb' => 'rect'));
						 snippet($snippet, array('item' => $third, 'itemclass' => 'Portfolio__item--small ', 'thumb' => 'rect'));
					elseif($design == '2-1'):
						 snippet($snippet, array('item' => $first, 'itemclass' => 'Portfolio__item--small ', 'thumb' => 'rect'));
						 snippet($snippet, array('item' => $second, 'itemclass' => 'Portfolio__item--medium Portfolio__item--right ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $third, 'itemclass' => 'Portfolio__item--small ', 'thumb' => 'rect'));
					elseif($design == '1-3'):
						 snippet($snippet, array('item' => $first, 'itemclass' => 'Portfolio__item--medium ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $second, 'itemclass' => 'Portfolio__item--tiny ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $third, 'itemclass' => 'Portfolio__item--tiny ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $fourth, 'itemclass' => 'Portfolio__item--small ', 'thumb' => 'rect'));
					elseif($design == '3-1'):
						 snippet($snippet, array('item' => $first, 'itemclass' => 'Portfolio__item--tiny ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $second, 'itemclass' => 'Portfolio__item--tiny ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $third, 'itemclass' => 'Portfolio__item--medium Portfolio__item--right ', 'thumb' => 'square'));
						 snippet($snippet, array('item' => $fourth, 'itemclass' => 'Portfolio__item--small ', 'thumb' => 'rect'));
					endif;
			endforeach; ?>

		</div>
		<?php snippet('down',  array('section' => $section)) ?>
</div>
