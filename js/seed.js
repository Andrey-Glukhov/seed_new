var scrollArrayInit = [
    {x1: 0, y1: 0, x2: 0, y2: -1024 },
    {x1: 0, y1: -1024, x2: 0, y2: -1024 },
    {x1: 0, y1: -1024, x2: -1920, y2: -1024 } //,
    //{x1: -1920, y1: -1024, x2: 0, y2: -1024 }
  ];
  var scrollArray;
  var offsetRange = 101;

  var templateWidth = 1920;
  var templateHeight = 1024;

jQuery(function($) {
    scrollArray = calcPoints(scrollArrayInit);
    var scrollProgress = 0;
        $(window).on('scroll',  function(e) {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          var scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );
          
          var offset = 100 * scrollTop / (scrollHeight - document.documentElement.clientHeight);
          var translate = getIntervalValue(offset);
          if (translate.scale)  {
            $('#Camada_2').css('transform', 'scale(' + translate.scale + ')');
          } else { 
            if (translate.hide) { 
              $('#Camada_2').css('display', 'none');
            } else {
              $('#Camada_2').css('display', 'block');
            } 
            $('.scroll-canvas').css('transform', 'translate(' + translate.x + 'px, ' + translate.y + 'px)');
          }
        });


    var options = {  
        rootMargin: '5px',  
        threshold: 0.5
    };
 
    var gateObserver = new IntersectionObserver( function(elements)  {
          elements.forEach( function(element) {
            //var isAbove = element.boundingClientRect.y < element.rootBounds.y; 
            if (element.intersectionRatio > 0.5) {
                // gsap.to('#gate_left', {transform: 'rotate3d(0,1,0, -90deg)', duration: 3});
                // gsap.to('#gate_right', {transform: 'rotate3d(0,1,0, 90deg)', duration: 3});
                $('#gate_left, #gate_right').addClass('open')
            } else {
                // gsap.to('#gate_left', {transform: 'rotate3d(0,1,0, 0', duration: 3});
                // gsap.to('#gate_right', {transform: 'rotate3d(0,1,0, 0)', duration: 3});
                $('#gate_left, #gate_right').removeClass('open')
            }

            //console.log("element", element);
          } ); 
    }, options);

    gateObserver.observe($('.gate-wrapper').get(0));

    
        
    $( window ).resize(function() {
       scrollArray = calcPoints(scrollArrayInit);
      });
    
     
    var t1 = new gsap.timeline({paused: true});
    t1.to(".overlay", 1.6, {
    
      top: 0,
      ease: Expo.easeInOut
    
    });
    
    t1.staggerFrom(".menu ul li", 1, {y: 100, opacity: 0, ease: Expo.easeOut}, 0.1);
    
    t1.reverse();
    $(document).on("click", ".menu-btn", function() {
      t1.reversed(!t1.reversed());
    });
    
    t1.reverse();
    $(document).on("click", "li", function() {
      t1.reversed(!t1.reversed());
   
    });

    $('.menu-btn').on('click', function () {
      if ($('.animated-icon1').hasClass('open')) {
        $('.animated-icon1').removeClass('open');
        $('.menu').removeClass('active');
      }else{
        $('.animated-icon1').addClass('open');
        $('.menu').addClass('active');
      };
    });

//Additional functions 

function getIntervalValue(offset) {
    if (offset > 100 ) {
      return {x:scrollArray[scrollArray.length-1].x2, y: scrollArray[scrollArray.length-1].y2};
    }
    if (offset <= 0 || scrollArray.length === 0) {
      return {x:scrollArray[0].x1, y: scrollArray[0].y1};
    }
    //console.log(offset);
    var interval = Math.floor(offset * scrollArray.length / offsetRange);
    var persent = offset % (offsetRange /scrollArray.length  ) / (offsetRange /scrollArray.length  ) ;
    //le.log(interval);
    //console.log(persent*100);
    var result = {
      scale: false,
      hide: false,
      x: 0,
      y: 0
    };
    if (interval == 1)  {
      result.scale = 1 + (2.5 - 1) * persent;
    } else { 
        if (interval > 1) {
          result.hide = true;
        }
        result.x = Math.floor(scrollArray[interval].x1 + (scrollArray[interval].x2 - scrollArray[interval].x1)*persent);
        result.y = Math.floor(scrollArray[interval].y1 + (scrollArray[interval].y2 - scrollArray[interval].y1)*persent);
    }
    return result;
  }

});


function calcPoints(pointsArrayInit) {
        pointsArray = [];
          for(var el of pointsArrayInit) {
              var x1 = el.x1 * document.documentElement.clientWidth / templateWidth;
              var y1 = el.y1 * document.documentElement.clientHeight / templateHeight;
              var x2 = el.x2 * document.documentElement.clientWidth / templateWidth;
              var y2 = el.y2 * document.documentElement.clientHeight / templateHeight;
              pointsArray.push({x1: x1, y1: y1, x2: x2, y2: y2})
                  //console.log(el[point]);
              
          }
         return pointsArray; 

      }
