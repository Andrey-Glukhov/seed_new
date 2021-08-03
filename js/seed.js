var scrollArray = [
    {x1: 0, y1: 0, x2: 0, y2: -1024 },
    {x1: 0, y1: -1024, x2: -1920, y2: -1024 } //,
    //{x1: -1920, y1: -1024, x2: 0, y2: -1024 }
  ];
  var offsetRange = 101;

  var templateWidth = 1920;
  var templateHeight = 1024;

jQuery(function($) {
    calcPoints(scrollArray);
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
          $('.scroll-canvas').css('transform', 'translate(' + translate.x + 'px, ' + translate.y + 'px)');
          
        });


    var options = {  
        rootMargin: '5px',  
        threshold: 0.5
    };
 
    var gateObserver = new IntersectionObserver( function(elements)  {
          elements.forEach( function(element) {
            //var isAbove = element.boundingClientRect.y < element.rootBounds.y; 
            if (element.intersectionRatio > 0.5) {
                gsap.to('#gate_left', {transform: 'rotateY(-90deg)', transformOrigin: '0 0', duration: 3});
               // $('#gate_right').css('transform-origin', '100% 100%')
                gsap.to('#gate_right', {transform: 'rotateY(90deg)', transformOrigin: '100% 100%', duration: 3});
            } else {
                gsap.to('#gate_left', {transform: 'rotateY(0deg)', duration: 3});
                gsap.to('#gate_right', {transform: 'rotateY(0deg)', duration: 3});
            }

            //console.log("element", element);
          } ); 
    }, options);

    gateObserver.observe($('.gate-wrapper').get(0));

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
        var newX = Math.floor(scrollArray[interval].x1 + (scrollArray[interval].x2 - scrollArray[interval].x1)*persent);
        var newY = Math.floor(scrollArray[interval].y1 + (scrollArray[interval].y2 - scrollArray[interval].y1)*persent);
        return {x: newX, y: newY};
      }
    
    //   function calcPoints(pointsArray) {
    //       for(var el of pointsArray) {
    //           for (var point in el) {
    //               console.log(point);
    //           }
    //       }

    //   }
      
});
window.onresize(function() {
    calcPoints(scrollArray);
});
function calcPoints(pointsArray) {
          for(var el of pointsArray) {
              el.x1 = el.x1 * document.documentElement.clientWidth / templateWidth;
              el.y1 = el.y1 * document.documentElement.clientHeight / templateHeight;
              el.x2 = el.x2 * document.documentElement.clientWidth / templateWidth;
              el.y2 = el.y2 * document.documentElement.clientHeight / templateHeight;
                  //console.log(el[point]);
              
          }

      }
