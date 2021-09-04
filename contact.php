<?php
/**
*Template Name: Contact
*/
 get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div id = "contect-wrapper">

<?php the_content(); ?>

</div>

<?php endwhile ?>
<?php endif  ?>

 <?php get_footer(); ?>




