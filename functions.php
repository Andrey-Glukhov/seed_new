<?php
/*
* Technoir functions and definitions  (technoir)
*/

if ( ! function_exists( 'seed_setup' ) ) :

function seed_setup() {
	
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'audio',
		'gallery',
		'image',
		'link',
		'quote',
		'status',
		'video',
	) );

}
endif;
add_action( 'after_setup_theme', 'seed_setup' );



/**
 * Enqueue scripts and styles.
 */
function seed_scripts() {

	// Styles
	wp_enqueue_style( 'seed-style', get_template_directory_uri() . '/css/seed.css' );

	 // unregister jQuery
	 wp_deregister_script('jquery-core');
	 wp_deregister_script('jquery');
   
	 // register
	 wp_register_script( 'jquery-core', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', false, null, true );
	 wp_register_script( 'jquery', false, array('jquery-core'), null, true );
   
	 // enqueue
	 wp_enqueue_script( 'jquery' );

	 // Bootstrap
	 wp_enqueue_script( 'bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js', array('jquery'), null, true );

	 // Gsap
	 wp_enqueue_script( 'gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js', array('jquery'), null, true );
	
	wp_enqueue_script( 'seed-javascript', get_template_directory_uri() . '/js/seed.js', array( 'jquery', 'bootstrap-js', 'gsap-js'), '20210606', true );

	
}
add_action( 'wp_enqueue_scripts', 'seed_scripts' );


function seed_theme_setup(){
	add_theme_support('menus');
	register_nav_menu('primary', 'Primary Header Navigation');
  }
  add_action('init', 'seed_theme_setup');