<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package FixMySync_theme
 */
  get_header(); 
?>
<?php while ( have_posts() ) : the_post(); ?>
  <div class="container">
    <div class="content">
    </div>
  </div>
<?php endwhile; ?>

<?php get_footer(); ?>