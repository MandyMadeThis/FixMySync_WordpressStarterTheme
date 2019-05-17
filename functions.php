<?php
/**
 * FixMySync_theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package FixMySync_theme
 */

if ( ! function_exists( 'fixmysync_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function fixmysync_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on FixMySync_theme, use a find and replace
		 * to change 'fixmysync' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'fixmysync', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary-nav' => esc_html__( 'Primary Nav', 'fixmysync' ),
		) );

		function add_menu_atts( $atts, $item, $args ) {
			$atts['class'] = "nav-label";
		  return $atts;
		}
		add_filter( 'nav_menu_link_attributes', 'add_menu_atts', 10, 3 );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		/* Get rid of all the wp-emoji crap in the head */
		remove_action('wp_head', 'print_emoji_detection_script', 7);
		remove_action('admin_print_scripts', 'print_emoji_detection_script');
		remove_action('wp_print_styles', 'print_emoji_styles');
		remove_action('admin_print_styles', 'print_emoji_styles');

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'fixmysync_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'fixmysync_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function fixmysync_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'fixmysync_content_width', 640 );
}
add_action( 'after_setup_theme', 'fixmysync_content_width', 0 );

  /* NOW LET'S ADD THE CORRECT OG & META TAGS TO OUR HEAD, DEPENDING ON THE PAGE WE'RE ON */
  function social_media_meta_tags() {
      global $post;

      $title       = wp_title('|', false, 'right');
      $description = null;

      if (is_single()) {
          $thumbnail_id     = get_post_thumbnail_id($post->ID, 'single-header');
          $thumbnail_object = get_post($thumbnail_id);
          $image            = $thumbnail_object->guid;

          $my_excerpt = get_the_excerpt();
          if ('' != $my_excerpt) {
              $description = substr($my_excerpt, 0, 152);
              $description = strip_tags($description);
              $description = str_replace("\"", "'", $description);
              $description = $description . "...";
          }

          $type = "article";

      } else if (is_home()) {
          $description = "NEED SOME DESCRIPTION ABOUT THE BLOG HERE";
          $image       = get_template_directory_uri() . "/images/social-fallback-image.jpg";
          $type        = "article:section";

      } else if (is_category()) {
          $description = substr(tag_description(), 0, 156);
          $description = strip_tags($description);
          $description = str_replace("\"", "'", $description);
          $description = $description . "...";
          $image       = null; //could change this to something, but not sure what the cat images should be?
          $type        = "article:section";

      } else if (is_author()) {
          $author_id   = $post->post_author;
          $description = get_the_author_meta('description', $author_id);
          $image       = get_avatar_url(get_avatar($author_id, 500));
          $author      = get_the_author_meta('user_nicename', $author_id);
          $type        = "article:author";

      } else {
          $image             = get_template_directory_uri() . "/images/social-fallback-image.jpg";
          $description       = get_bloginfo('description');
          $tweet_description = get_bloginfo('description');
          $type              = "website";
      }

?>
  <meta name="description" content="<?php echo $description; ?>" />
  <!-- Open Graph -->
  <meta property="og:title" content="<?php echo $title; ?>" />
  <meta property="og:type" content="<?php echo $type; ?>" />
  <meta property="og:image" content="<?php echo $image; ?>" />
  <meta property="og:url" content="<?php the_permalink(); ?>" />
  <meta property="og:description" content="<?php echo $description; ?>" />
  <meta property="og:site_name" content="<?php echo get_bloginfo('name'); ?>" />

  <!-- Twitter Card Integration -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="<?php echo $title; ?>" />
  <meta name="twitter:description" content="<?php echo $description; ?>" />
  <meta name="twitter:image:src" content="<?php echo $image; ?>" />
  <meta name="twitter:url" content="<?php the_permalink(); ?>" />
<?php
  }
  add_action('wp_head', 'social_media_meta_tags');

/**
 * Enqueue scripts and styles.
 */
function FixMySync_theme_scripts() {
	// LOAD STYLESHEETS
	wp_register_style('FixMySync_theme-stylesheet', get_stylesheet_directory_uri() . '/css/style.css', array(), null, 'all');

	// LOAD IN FOOTER
	wp_deregister_script('jquery');
	wp_register_script('jquery', "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js", array(), null, true);
	wp_register_script('vendor', get_stylesheet_directory_uri() . "/js/vendor-scripts.js", array(), null, true);
	wp_register_script('script', get_stylesheet_directory_uri() . "/js/app.js", array(), null, true);

	// ENQUEUE STYLES
	wp_enqueue_style('FixMySync_theme-stylesheet');

	// ENQUEUE SCRIPTS
	wp_enqueue_script('jquery');
	wp_enqueue_script('vendor');
	wp_enqueue_script('script');
}

add_action( 'wp_enqueue_scripts', 'FixMySync_theme_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';


/**************************************************************
get_post_thumbnail_url()
Returns the post thumbnail URL without any effing around
***************************************************************/
function get_post_thumbnail_url($size = 'thumbnail', $image_id = NULL) {
    if ($image_id === NULL) {
        $image_id = get_post_thumbnail_id();
    }

    $image_url = wp_get_attachment_image_src($image_id, $size);
    $image_url = $image_url[0];
    return $image_url;
}


/**********************************
ALLOW SVG FILES TO BE UPLOADED
THROUGH THE WP MEDIA LIBRARY
***********************************/
function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

/*****************************************
REMOVE WORDPRESS FILE EDITING FEATURE
******************************************/
define('DISALLOW_FILE_EDIT', TRUE);


/*****************************************
REMOVE POSTS FROM WORDPRESS ADMIN
******************************************/
function remove_menus() {
    remove_menu_page( 'edit.php' );
}
add_action( 'admin_menu', 'remove_menus' );
