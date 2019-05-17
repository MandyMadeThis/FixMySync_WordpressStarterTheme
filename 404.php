<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package FixMySync_theme
 */

	get_header();
?>

<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'fixmysync' ); ?></p>

<?php
	get_search_form();

	the_widget( 'WP_Widget_Recent_Posts' );
?>

	<div class="widget widget_categories">
		<h2 class="widget-title"><?php esc_html_e( 'Most Used Categories', 'fixmysync' ); ?></h2>
		<ul>
			<?php
			wp_list_categories( array(
				'orderby'    => 'count',
				'order'      => 'DESC',
				'show_count' => 1,
				'title_li'   => '',
				'number'     => 10,
			) );
			?>
		</ul>
	</div><!-- .widget -->
<?php
get_footer();
