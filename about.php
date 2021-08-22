<?php
/**
*Template Name: About
*/
 get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div id = "about-opener">

<?php the_content(); ?>

</div>

<div class="container-fluid about-container">
    <div class="row justify-content-center">
        <div class="col-10">
        <?php the_field('about_text'); ?>
        </div>
    </div>
    <div class="row team justify-content-center">
        <div class="cofounder_portret col-5">
        <img src="http://localhost:8888/seed/wordpress/wp-content/uploads/2021/08/portrait-liza_1-scaled-1.jpg" alt="Elizaveta Glukhova">
        </div>
        <div class="col-5">
        <?php the_field('team_text'); ?>
        </div>
    </div>

<div class="row mx-auto my-auto testimonials">
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
            <div class="carousel-inner w-100" role="listbox">

            <?php if( have_rows('testimonials') ): ?>
                <?php while( have_rows('testimonials') ): the_row(); 
                        $image = get_sub_field('portret');
                        $caption = get_sub_field('t-content');?>
                <div class="carousel-item">
                    <div class="col-md-4">
                        <div class="card card-body testimonials_wrapper">
                             <img src="<?php echo $image ?>" />
                            <p><?php echo $caption ?></p>
                        </div> 
                    </div>
                </div>
                <?php endwhile; ?>
                <?php endif; ?> 
            </div>
            
            <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>



    <div class="row logoes justify-content-center">

    <?php 
        $logoes = get_field('logoes');
        if( $logoes ): foreach( $logoes as $logo ): ?>
        <div class="col-md-1 col-sm-3 col-3 s_logo" style="background-image:url(<?php echo $logo; ?>)">
        </div>
        <?php endforeach; ?>
        <?php endif; ?>     
    </div>
</div>

<?php endwhile ?>
<?php endif  ?>


 <?php get_footer(); ?>