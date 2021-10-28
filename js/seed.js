var scrollArrayInit = [
  { x1: -1920, y1: 0, x2: -1920, y2: -1024 }, //0
  { x1: -1920, y1: -1024, x2: -1920, y2: -1024 },  //1
  { x1: -1920, y1: -1024, x2: -1920, y2: -1024 }, //2
  { x1: -1920, y1: -1024, x2: -3840, y2: -1024 }, //3
  { x1: -3840, y1: -1024, x2: -3840, y2: -2048 }, //4
  { x1: -3840, y1: -2048, x2: -1920, y2: -2048 }, //5
  { x1: -1920, y1: -2048, x2: 0, y2: -2048 }, //6
  { x1: 0, y1: -2048, x2: 0, y2: -3072 }, //7
  { x1: 0, y1: -3072, x2: -1920, y2: -3072 }, //8
  { x1: -1920, y1: -3072, x2: -3840, y2: -3072 },  //9
  { x1: -3840, y1: -3072, x2: -3840, y2: -4096 },  //10
  { x1: -3840, y1: -4096, x2: -1920, y2: -4096 },  //11
  { x1: -1920, y1: -4096, x2: 0, y2: -4096 },  //12
  { x1: 0, y1: -4096, x2: 0, y2: -5120 },  //13
  { x1: 0, y1: -5120, x2: -1920, y2: -5120 }, //14
  { x1: -1920, y1: -5120, x2: -3840, y2: -5120 },  //15
  { x1: -3840, y1: -5120, x2: -3840, y2: -6144 }, //16
  { x1: -3840, y1: -6144, x2: -1920, y2: -6144 },  //17
  { x1: -1920, y1: -6144, x2: 0, y2: -6144 }, //18
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
var rateX;
var rateY;

jQuery(function ($) {
  if ($("#slogan").length) {
    scrollArray = calcPoints(scrollArrayInit);

    var scrollProgress = 0;
    var currentInterval = 0;

    mypath = document.getElementById("line");
    var footString =
      '<svg id="road" version="1.1" viewBox="0 0 ' +
      $(".scroll_canvas").width() +
      " " +
      $(".scroll_canvas").height() +
      '" xmlns="http://www.w3.org/2000/svg">';
    footString +=
      '<g id="tmplt" style="display: none; opacity: 0;" ><g id="g831"><path id="path6" d="M20.633 31.168c3.91-1.876 6.842-5.563 9.404-7.393 8.881.29 18.365.675 26.066 4.282 5.134 1.41 5.248 6.71-.987 6.777-10.903 1.316-23.004 1.423-32.85-2.762-.57-.274-1.133-.562-1.633-.904Z" fill="#231f20"/><path id="path10" d="m22.728 22.31-9.618 7.309C9.164 27.699.045 27.882.087 23.81c3.456-3.885 10.766-4.153 16.261-2.78 2.143.38 4.288.766 6.38 1.278Z" fill="#231f20"/></g><g id="g827"><path id="path8" d="M80.242 15.2c2.64-2.285 5.165-5.145 5.683-8.725 1.147-1.197 3.01-.727 4.427-1.371 7.533-1.711 15.24-3.31 23.006-2.749 1.876.263 3.892.773 5.295 2.099 1.072 1.913-1.182 3.396-2.731 3.972-6.051 3.017-12.67 4.646-19.234 6.115-5.383 1.104-11.01 1.853-16.446.659Z" fill="#231f20"/><path id="path12" d="M76.54 7.962c-5.57 1.33-11.38 1.91-16.735 3.98-3.144.76-7.619 6.448-1.738 6.51 4.876.085 9.712-.858 14.44-1.967l4.033-8.523z" fill="#231f20"/></g></g>';
    footString += '<g id="map"></g></svg>';
    $(".foot_svg").html(footString);

    rateX = 1920 / document.documentElement.clientWidth;
    rateY = 1024 / document.documentElement.clientHeight;

    templ = SVG("#tmplt");
    shapeSize = templ.bbox().width * 1.4;
    // console.log("size--", shapeSize);
    pathLength = mypath.getTotalLength();
    shapesArr[0] = {
      progress: 0,
      point: mypath.getPointAtLength(0),
      shape: templ,
    };
    shapesArr[0].point.x /= rateX;
    shapesArr[0].point.y /= rateY;
    $(window).on("scroll", scrollMove);

    $(window).resize(function () {
      scrollArray = calcPoints(scrollArrayInit);
      window.scrollTo(window.scrollX, window.scrollY - 1);
      scrollMove(0)
    });

    window.scrollTo(window.scrollX, window.scrollY - 1);

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

    var tl1 = gsap.timeline({ repeatDelay: 4, repeat: -1 });
    tl1.to("#crown .grdc-2", 0.1, { x: 5 });
    tl1.to("#crown .grdc-4", 0.1, { x: 7 });
    tl1.to("#crown .grdc-2", 0.1, { x: -5 });
    tl1.to("#crown .grdc-4", 0.1, { x: -7 });

    scrollMove(0);
  }

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();
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
      result.interval = 0; // scrollArray.length - 1;
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
    console.log("---scroll---", scrollProgress);
    var translate = getIntervalValue(offset, directionDown);
    // gate text
    // if (currentInterval == 3 && translate.interval == 4) {
    //   $(".slogan_wrapper").after($(".gate_text"));
    //   $(".gate_text").attr(
    //     "style",
    //     "position: fixed; top:0; right:0; z-index:2;"
    //   );
    // }
    // if (currentInterval == 4 && translate.interval == 5) {
    //   $(".gate_text").appendTo(".greenhouse_right");
    //   $(".gate_text").attr("style", "");
    // }
    // if (currentInterval == 5 && translate.interval == 4) {
    //   $(".slogan_wrapper").after($(".gate_text"));
    //   $(".gate_text").attr(
    //     "style",
    //     "position: fixed; top:0; right:0;z-index:2;"
    //   );
    // }
    // if (
    //   (currentInterval == 4 || currentInterval == 5) &&
    //   translate.interval <= 3
    // ) {
    //   $(".gate_text").appendTo(".seed_gate");
    //   $(".gate_text").attr("style", "");
    // }
    // greenhouse text
    // if (currentInterval == 6 && translate.interval == 7) {
    //   $(".slogan_wrapper").after($(".greenhouse_text"));
    //   $(".greenhouse_text").attr(
    //     "style",
    //     "position: fixed; top:0; left:0; z-index:2;"
    //   );
    // }
    // if (currentInterval == 7 && translate.interval == 8) {
    //   $(".greenhouse_text").appendTo(".garden_left");
    //   $(".greenhouse_text").attr("style", "");
    // }
    // if (currentInterval == 8 && translate.interval == 7) {
    //   $(".slogan_wrapper").after($(".greenhouse_text"));
    //   $(".greenhouse_text").attr(
    //     "style",
    //     "position: fixed; top:0; left:0;z-index:2;"
    //   );
    // }
    // if (
    //   (currentInterval == 7 || currentInterval == 8) &&
    //   translate.interval <= 6
    // ) {
    //   $(".greenhouse_text").appendTo(".seed_greenhouse");
    //   $(".greenhouse_text").attr("style", "");
    // }
    // >>>
    fixTextBlocks(translate.interval);
    currentInterval = translate.interval;
    console.log("===interval===", currentInterval);
    if (translate.scale) {
      $("#svg_gate").css("transform", "scale(" + translate.scale + ")");
    } else {
      $("#svg_gate").css("transform", "scale(1)");
    }
    if (translate.hide) {
      $("#svg_gate").css("display", "none");
    } else {
      $("#svg_gate").css("display", "block");
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
    // if (currentInterval > 2) {
      
    //   mapGraph(
    //     scale(scrollProgress, (100 * 2) / scrollArray.length - 10, 100, 0, 100)
    //   );
    // } else {
    //   while (shapesArr.length > 1) {
    //     shapesArr[shapesArr.length - 1].shape.remove();
    //     shapesArr.pop();
    //   }
    // }
  }
});

function fixTextBlocks(posInterval) {
  $('.text_field').each(function() {
    var start = +$(this).attr('data-start');
    var position = $(this).attr('data-pos');
    var parent = $(this).attr('data-parent');
    var stepparent = $(this).attr('data-stepparent');
    var fixparent = $(this).attr('data-fixed');
    //console.log('data-' + start);
    if (! $.isNumeric(start)) return;
      console.log('start-' + start);
    if (posInterval < start) {
      if (position != 'absolute') {
        $(this).appendTo('.' + parent);
        $(this).attr('style', '');
        $(this).attr('data-pos', 'absolute');
      }
    } else if (posInterval == start) {
      if (position != 'fixed') {
        $('.' + fixparent).after($(this));
       $(this).attr(
         "style",
         "position: fixed; top:0; z-index:2;"
       );
       $(this).attr('data-pos', 'fixed');
      }  
      console.log('equal-' + start);
    } else {
      if (position != 'moved') {
        $(this).appendTo('.' + stepparent);
        $(this).attr('style', '');
        $(this).attr('data-pos', 'moved');
      }  
    }
  });


}

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
  console.log("---map---", progress);
  if (
    shapesArr.length > 0 &&
    shapesArr[shapesArr.length - 1].progress > progress
  ) {
    while (
      shapesArr[shapesArr.length - 1].progress > progress &&
      shapesArr.length > 1
    ) {
      shapesArr[shapesArr.length - 1].shape.remove();
      shapesArr.pop();
    }
    return;
  }
  // place shapes
  var linePoint = mypath.getPointAtLength((pathLength * progress) / 100);
  var dist = getDistance(shapesArr[shapesArr.length - 1].point, {
    x: linePoint.x / rateX,
    y: linePoint.y / rateY,
  });
  var steps = Math.floor(dist / shapeSize);
  var progressStep =
    (progress - shapesArr[shapesArr.length - 1].progress) / steps;

  for (var st = 0; st < steps; st++) {
    var newShape = {};
    newShape.progress = shapesArr[shapesArr.length - 1].progress + progressStep;

    newShape.point = mypath.getPointAtLength(
      (pathLength * newShape.progress) / 100
    );
    newShape.point.x /= rateX;
    newShape.point.y /= rateY;
    var cloneShape = templ.clone();
    cloneShape.move(newShape.point.x, newShape.point.y);
    var lastPoint = shapesArr[shapesArr.length - 1].point;
    var distStep = getDistance(
      shapesArr[shapesArr.length - 1].point,
      newShape.point
    );

    var dy = newShape.point.y - shapesArr[shapesArr.length - 1].point.y;
    var dx = newShape.point.x - shapesArr[shapesArr.length - 1].point.x;
    var vectLength = Math.sqrt(dx ** 2 + dy ** 2);
    var angle;
    if (dx >= 0 && dy >= 0) {
      angle = (Math.asin(dy / vectLength) * 180) / Math.PI;
    } else if (dx >= 0 && dy < 0) {
      angle = (-Math.asin(-dy / vectLength) * 180) / Math.PI;
    } else if (dx < 0 && dy >= 0) {
      angle = ((Math.PI - Math.asin(dy / vectLength)) * 180) / Math.PI;
    } else if (dx < 0 && dy < 0) {
      angle = ((-Math.PI + Math.asin(-dy / vectLength)) * 180) / Math.PI;
    }

    console.log("---angle---" + angle);
    cloneShape.transform({
      rotate: angle,
    });

    cloneShape.css({
      display: "inline",
    });
    cloneShape.addTo("#map");
    gsap.to(cloneShape.node, 1, { opacity: 1, delay: 0.5 });
    newShape.shape = cloneShape;
    shapesArr.push(newShape);
  }
  // set last
}

function scale(x, a, b, c, d) {
  return c + (d - c) * ((x - a) / (b - a));
}

// $("#recipeCarousel").carousel({
//   interval: 10000,
// });

// $(".carousel-inner .carousel-item:first").addClass("active");

// $(".carousel .carousel-item").each(function () {
//   var minPerSlide = 3;
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }
//   next.children(":first-child").clone().appendTo($(this));

//   for (var i = 0; i < minPerSlide; i++) {
//     next = next.next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next.children(":first-child").clone().appendTo($(this));
//   }
// });
