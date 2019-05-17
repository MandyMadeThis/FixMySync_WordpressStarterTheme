<?php
/**
 *  Template part for displaying searchInput
 *
 *  @package FixMySync_theme
 */
?>

<div class='searchInputWrapper'>
  <form role="search" method="get" action="work">
    <input type="text" class="searchInput" name="q" value="<?php echo $_GET['q']; ?>" placeholder="Search by keyword..." />
    <svg class="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path d="M31,28.2h-1.5L29,27.7c1.8-2.1,2.9-4.9,2.9-7.9c0-6.7-5.4-12.2-12.2-12.2S7.7,13.1,7.7,19.8S13.1,32,19.8,32 c3,0,5.8-1.1,7.9-2.9l0.5,0.5V31l9.3,9.3l2.8-2.8L31,28.2z M19.8,28.2c-4.6,0-8.4-3.8-8.4-8.4s3.8-8.4,8.4-8.4s8.4,3.8,8.4,8.4  S24.4,28.2,19.8,28.2z"/>
    </svg>
  </form>
</div>
