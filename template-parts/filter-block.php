<?php
/**
 *  Template part for displaying filterBlock
 *
 *  @package FixMySync_theme
 */
  $args = [
      'taxonomy'     => 'typology',
      'hide_empty'    => true,          
  ];

  $catObject = get_terms( $args );
?>

<div class="filterBlock">
    <div class="grid">
      <div class="grid-1of2 hide--portable"></div>
      <div class="grid-1of2 grid-1of1--portable">
        <h6 class="filterBlock-title">
          <span>Project Type</span>
          <span class="filterBlock-arrow"></span>
        </h6>
          
        <div class="filterBlock-filters">
          <div class="grid">
          <?php foreach ( $catObject as $cat ) : ?>
            <div class="grid-1of3 grid-1of2--palm">
              <?php
                $handle = strtolower($cat->name); 
                $handle = preg_replace("/[^A-Za-z]/", '', $handle);
                $active = false;
                if ($_GET['tag'] == $handle) { $active = true; }
              ?>
              <a class="filterBlock-filterItem <?php if ($active) { echo 'filterBlock-filterItem--filtered'; } ?>" href="/work/?tag=<?php echo $handle; ?>"><?php echo $cat->name; ?></a>
            </div>
          <?php endforeach; ?>
          </div>
        </div>
        <div class="filterBlock-clearContainer <?php if ($_GET['tag']) { echo 'filterBlock-clearContainer--open'; } ?>">
          <h6 class="filterBlock-clearAll">
            <a href="/work">Clear Filter</a>
          </h6>
        </div>
      </div>
    </div>
</div>
