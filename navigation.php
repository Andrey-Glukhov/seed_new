
<div class="wrapper">
  <div class="menu-btn">
    <div class="animated-icon1"><span></span><span></span><span></span></div>
  </div>

  <div class="menu container-fluid" style="padding:0;">
    <div class="united">
      <div class="row group overlay justify-content-around">
        <div class="col-md-5 col-sm-12 col-12">
          <div class="nav_content">

              <?php
              wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'auto-navigation',
                'items_wrap' => '<ul id="%1$s" class="navigation-bar %2$s">%3$s</ul>',
                'item_spacing' => 'preserve'
              )
            );
            ?>

        </div>
      </div>
      <div class="col-md-5 col-sm-12 col-12">
      <?php echo do_shortcode('[ninja_form id=1]'); ?>

      </div>

    </div>
  </div>
</div>
</div>
