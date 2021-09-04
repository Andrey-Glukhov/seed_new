<?php
/**
*Template Name: Blog
*/
 get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div id = "blog-wrapper">

<?php the_content(); ?>

</div>

<?php endwhile ?>
<?php endif  ?>

<div class="container-fluid blog-container">
	<div class="row justify-content-center">
		<div class="col-10">

		</div>
	</div>


</div>


 <?php get_footer(); ?>