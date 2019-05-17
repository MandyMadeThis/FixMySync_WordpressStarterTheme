<?php
/**
 *  Template Name: Homepage
 *
 *  This is the template that displays the homepage. All
 *  sections of the homepage can be found in modular parts inside of
 *  /template-parts/content
 *
 *  @package FixMySync_theme
 */
  get_header();  
?>
  <?php get_template_part('template-parts/homepage/home', 'hero'); ?>
  
<?php get_footer(); ?>