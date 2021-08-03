
<div class="wrapper">
  <div class="menu-btn">
    <div class="animated-icon1"><span></span><span></span><span></span></div>
  </div>

  <div class="menu container-fluid" style="padding:0;">
    <div class="united">
      <div class="row group overlay">
        <div class="col-6">
          <div class="nav_content">
            <ul>
              <?php
              wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'auto-navigation',
                'items_wrap' => '<div id="%1$s" class="navigation-bar %2$s">%3$s</div>',
                'item_spacing' => 'preserve'
              )
            );
            ?>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <!-- Begin Mailchimp Signup Form -->
        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">

        <div id="mc_embed_signup">
          <form action="https://mail.us19.list-manage.com/subscribe/post?u=1bfba63ef2733a00c3e8d2dd8&amp;id=1b6b1b69c4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
              <div class="mc-field-group">
                <label for="mce-NAME">Name  <span class="asterisk">*</span>
                </label>
                <input type="text" value="" name="NAME" class="required" id="mce-NAME">
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                </label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1bfba63ef2733a00c3e8d2dd8_1b6b1b69c4" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
          </form>
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='NAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
        <!--End mc_embed_signup-->

      </div>

    </div>
  </div>
</div>
</div>
