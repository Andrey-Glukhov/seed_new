var scrollArrayInit = [
  { x1: -1920, y1: 0, x2: -1920, y2: -1024 },
  { x1: -1920, y1: -1024, x2: -1920, y2: -1024 },
  { x1: -1920, y1: -1024, x2: -1920, y2: -1024 },
  { x1: -1920, y1: -1024, x2: -3840, y2: -1024 },
  { x1: -3840, y1: -1024, x2: -3840, y2: -2048 },
  { x1: -3840, y1: -2048, x2: -1920, y2: -2048 },
  { x1: -1920, y1: -2048, x2: 0, y2: -2048 },
  { x1: 0, y1: -2048, x2: 0, y2: -3072 },
  { x1: 0, y1: -3072, x2: -1920, y2: -3072 },
  { x1: -1920, y1: -3072, x2: -3840, y2: -3072 }, //
  { x1: -3840, y1: -3072, x2: -3840, y2: -4096 },
  { x1: -3840, y1: -4096, x2: -1920, y2: -4096 },
];
var scrollArray;
var offsetRange = 100;

var templateWidth = 1920;
var templateHeight = 1024;

var shapesArr = [];
var lastShape;

var mypath;
var templ;
var pathLength;
var shapeSize;

jQuery(function ($) {
  if ($("#slogan").length){
  scrollArray = calcPoints(scrollArrayInit);

  var scrollProgress = 0;
  var currentInterval = 0;

  mypath = document.getElementById("line");
  templ = SVG("#tmplt");
  shapeSize = templ.bbox().width;
 // console.log("size--", shapeSize);
  pathLength = mypath.getTotalLength();
  shapesArr[0] = { progress: 0, point: mypath.getPointAtLength(0), shape: templ};

  $(window).on("scroll", scrollMove);

  $(window).resize(function () {
    scrollArray = calcPoints(scrollArrayInit);
    window.scrollTo(window.scrollX, window.scrollY - 1);
  });

  window.scrollTo(window.scrollX, window.scrollY - 1);

  var controller = new ScrollMagic.Controller();

    // <<--- Home page
    gsap.set(".leaf_lite", { transformOrigin: "right bottom" }); /// clip-path="url(#clip)"  clip-path="url(#frame)"
    gsap.to(".leaf_lite", {
      rotation: 5,
      stagger: 0.4,
      duration: 1,
      yoyo: true,
      repeat: -1,
    });
    var tl1 = gsap.timeline({ repeatDelay: 4, repeat: -1 });
    gsap.set("#fish", { transformOrigin: "60% 80%" });
    tl1.to("#fish", 1.6, { rotation: "185deg" });
    tl1.to("#water .line", 0.6, { opacity: 1, stagger: 0.1 });
    tl1.to("#water .line", 0.6, { opacity: 0, stagger: 0.1 });
    scrollMove(0);
}
  
  // <<--- About page
  if ($("#about-opener").length) {
    var pinAboutScene = new ScrollMagic.Scene({})
      .setPin("#about-opener")
      .addTo(controller);

    $("#recipeCarousel").carousel({
      interval: 10000,
    });

    $(".carousel-inner .carousel-item:first").addClass("active");

    $(".carousel .carousel-item").each(function () {
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }
      next.children(":first-child").clone().appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }
        next.children(":first-child").clone().appendTo($(this));
      }
    });
  }
  // --->>

  //<<--- Blog page
  if ($("#blog-wrapper").length) {
    var pinBlogScene = new ScrollMagic.Scene({})
      .setPin("#blog-opener")
      .addTo(controller);
  }
  // --->>
    //<<--- Contact page
    if ($("#contact-wrapper").length) {
      var pinContactScene = new ScrollMagic.Scene({})
        .setPin("#contact-opener")
        .addTo(controller);
    }
    // --->>

  // <<--- Menu
  var t1 = new gsap.timeline({ paused: true });
  t1.to(".overlay", 1.6, {
    top: 0,
    ease: Expo.easeInOut,
  });

  t1.staggerFrom(
    ".menu ul li",
    1,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    0.1
  );

  t1.reverse();
  $(document).on("click", ".menu-btn", function () {
    t1.reversed(!t1.reversed());
  });

  t1.reverse();
  $(document).on("click", "li", function () {
    t1.reversed(!t1.reversed());
  });

  $(".menu-btn").on("click", function () {
    if ($(".animated-icon1").hasClass("open")) {
      $(".animated-icon1").removeClass("open");
      $(".menu").removeClass("active");
    } else {
      $(".animated-icon1").addClass("open");
      $(".menu").addClass("active");
    }
  });
  // --->>



  // $(".menu-btn").on("click", function () {
  //   if ($(".animated-icon1").hasClass("open")) {
  //     $(".animated-icon1").removeClass("open");
  //     $(".menu").removeClass("active");
  //   } else {
  //     $(".animated-icon1").addClass("open");
  //     $(".menu").addClass("active");
  //   }
  // });

  //Additional functions

  function getIntervalValue(offset, directionDown) {
    var result = {
      interval: 0,
      scale: false,
      hide: false,
      open: false,
      x: 0,
      y: 0,
    };
    if (offset >= 100) {
      result.x = scrollArray[scrollArray.length - 1].x2;
      result.y = scrollArray[scrollArray.length - 1].y2;
      result.interval = scrollArray.length - 1;
      if (result.interval > 1) {
        result.hide = true;
      }
      return result;
    }
    if (offset <= 0 || scrollArray.length === 0) {
      result.x = scrollArray[0].x1;
      result.y = scrollArray[0].y1;
      result.interval = scrollArray.length - 1;
      return result;
    }

    result.interval = Math.floor((offset * scrollArray.length) / offsetRange);
    if (result.interval > scrollArray.length - 1) {
      result.interval = scrollArray.length - 1;
    }
    var persent =
      (offset % (offsetRange / scrollArray.length)) /
      (offsetRange / scrollArray.length);
    if (persent > 0 && persent < 0.2) {
      persent = 0;
    } else if (persent > 0.8) {
      persent = 1;
    }
    if (result.interval == 1) {
      result.hide = false;
      result.open = {
        left: -90 * persent,
        right: 90 * persent,
      };
    } else if (result.interval == 2) {
      result.hide = false;
      result.open = {
        left: -90,
        right: 90,
      };
      result.scale = 1 + (2.5 - 1) * persent;
    } else if (result.interval > 2) {
      result.hide = true;
    }

    result.x = Math.floor(
      scrollArray[result.interval].x1 +
        (scrollArray[result.interval].x2 - scrollArray[result.interval].x1) *
          persent
    );
    result.y = Math.floor(
      scrollArray[result.interval].y1 +
        (scrollArray[result.interval].y2 - scrollArray[result.interval].y1) *
          persent
    );
    return result;
  }

  function scrollMove(e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    var offset =
      (100 * scrollTop) /
      (scrollHeight - document.documentElement.clientHeight);
    var directionDown;
    if (offset > scrollProgress) {
      directionDown = true;
    }
    scrollProgress = offset;
    console.log('---scroll---', scrollProgress);
    var translate = getIntervalValue(offset, directionDown);

    if (currentInterval == 3 && translate.interval == 4) {
      $(".slogan_wrapper").after($(".gate_text"));
      $(".gate_text").attr(
        "style",
        "position: fixed; top:0; right:0; z-index:2;"
      );
    }
    if (currentInterval == 4 && translate.interval == 5) {
      $(".gate_text").appendTo(".greenhouse_right");
      $(".gate_text").attr("style", "");
    }
    if (currentInterval == 5 && translate.interval == 4) {
      $(".slogan_wrapper").after($(".gate_text"));
      $(".gate_text").attr(
        "style",
        "position: fixed; top:0; right:0;z-index:2;"
      );
    }
    if (currentInterval == 4 && translate.interval == 3) {
      $(".gate_text").appendTo(".seed-gate");
      $(".gate_text").attr("style", "");
    }
    currentInterval = translate.interval;
    if (translate.scale) {
      $("#Camada_2").css("transform", "scale(" + translate.scale + ")");
    } else {
      $("#Camada_2").css("transform", "scale(1)");
    }
    if (translate.hide) {
      $("#Camada_2").css("display", "none");
    } else {
      $("#Camada_2").css("display", "block");
    }
    if (translate.open) {
      $("#gate_left").css(
        "transform",
        "rotate3d(0, 1, 0, " + translate.open.left + "deg)"
      );
      $("#gate_right").css(
        "transform",
        "rotate3d(0, 1, 0, " + translate.open.right + "deg)"
      );
    } else {
      $("#gate_left").css("transform", "rotate3d(0, 1, 0,  0deg)");
      $("#gate_right").css("transform", "rotate3d(0, 1, 0, 0deg)");
    }

    $(".scroll_canvas").css(
      "transform",
      "translate(" + translate.x + "px, " + translate.y + "px)"
    );
    mapGraph(scrollProgress);
  }
});

function calcPoints(pointsArrayInit) {
  pointsArray = [];
  for (var el of pointsArrayInit) {
    var x1 = (el.x1 * document.documentElement.clientWidth) / templateWidth;
    var y1 = (el.y1 * document.documentElement.clientHeight) / templateHeight;
    var x2 = (el.x2 * document.documentElement.clientWidth) / templateWidth;
    var y2 = (el.y2 * document.documentElement.clientHeight) / templateHeight;
    pointsArray.push({ x1: x1, y1: y1, x2: x2, y2: y2 });
  }
  return pointsArray;
}

function getDistance(p1, p2) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function getAngleFromPoint(p2, p1) {
  var dy = point.y - centerPoint.y,
    dx = point.x - centerPoint.x;
  var theta = Math.atan2(dy, dx);
  var angle = ((theta * 180) / Math.PI) % 360;
  angle = angle < 0 ? 360 + angle : angle;
  return angle;
}

function mapGraph(progress) {
  // check if we have more shapes
  console.log('---map---', progress);
  if (
    shapesArr.length > 0 &&
    shapesArr[shapesArr.length - 1].progress > progress
  ) {
    while (shapesArr[shapesArr.length - 1].progress > progress) {
      shapesArr[shapesArr.length - 1].shape.remove();
      shapesArr.pop();
    }
    return;
  }
  // place shapes
  var dist = getDistance(
    shapesArr[shapesArr.length - 1].point,
    mypath.getPointAtLength(pathLength * progress)
  );
  var steps = Math.floor(dist / shapeSize);
  var progressStep =
    (progress - shapesArr[shapesArr.length - 1].progress) / steps;

  for (var st = 0; st < steps; st++) {
    var newShape = {};
    newShape.progress = shapesArr[shapesArr.length - 1].progress + progressStep;

    newShape.point = mypath.getPointAtLength(
      (pathLength * newShape.progress) / 100
    );
    var cloneShape = templ.clone();
    cloneShape.move(newShape.point.x, newShape.point.y);
    cloneShape.attr({
      fill: '#f06'
      , 'fill-opacity': 0.5
      , stroke: '#000'
      , 'stroke-width': 10
  });
    cloneShape.css({
      display: "inline"      
    });
    cloneShape.addTo("#map");
    newShape.shape = cloneShape;
    shapesArr.push(newShape);
  }

  // set last
}
/// <<< ????
// $('#recipeCarousel').carousel({
//   interval: 10000
// })

$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel-inner .carousel-item:first').addClass('active');

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        next.children(':first-child').clone().appendTo($(this));
      }
});


