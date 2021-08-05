<!doctype html>
<html>
<head>
  <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1" >
  <meta name="keywords" content="seed" />
  <meta name="description" content="BRAND IDENTITY & DESIGN" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <title>SEED studio</title>

  
  <?php wp_head(); ?>
</head>

<?php
if(is_front_page()):
  $seed_classes = array('seed_front_class', 'front_class');
else:
  $seed_classes = array('no_seed_front_class');
endif;
?>

<body>
  <header>
  <?php include (TEMPLATEPATH . '/navigation.php'); ?>
  </header>

