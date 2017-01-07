angular.module('myPortfolio')
  .directive('jqueryDirective', function() {
    var linkFn;
    linkFn = function(scope, element, attrs) {

      $( document ).ready(function() {

        $(this).scrollTop(0);

        $('#select-anchor').change( function () {
           var targetPosition = $($(this).val()).offset().top;
           $('html,body').animate({ scrollTop: targetPosition}, 'slow');
       });

        $(window).bind('scroll', function() {
          if($(window).width() <= 768 && $(window).height() <= 1024) {
            var navHeight = $( window ).height() + -225;
          } else if($(window).width() <= 1024 && $(window).height() <= 768) {
            var navHeight = $( window ).height() + 33;
          } else if($(window).width() <= 1024 && $(window).height() <= 1366) {
            var navHeight = $( window ).height() + -568;
          } else if($(window).width() <= 1366 && $(window).height() <= 1024) {
            var navHeight = $( window ).height() + 52;
          } else {
            var navHeight = $( window ).height() + 35;
          }

      			 if ($(window).scrollTop() > navHeight) {
      				 $('.navBar').addClass('fixed');
      			 }
      			 else {
      				 $('.navBar').removeClass('fixed');

      			 }
      		});

          $(window).scroll(function() {
        		$('#aboutMeTitle').each(function(){
        		var imagePos = $(this).offset().top;

        		var topOfWindow = $(window).scrollTop();
        			if (imagePos < topOfWindow+600) {
        				$(this).addClass("fadeIn");
        			}
        		});
        	});


          $(window).scroll(function() {
            $('#profilePicture').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("slideRight");
              }
            });
          });

          $(window).scroll(function() {
            $('#profileDescription').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("slideLeft");
              }
            });
          });

          $(window).scroll(function() {
            $('#educationTitle1').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#myResumeTitle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#educationTitle2').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#education1').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#education2').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#work1').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#work2').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#work3').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#mySkillsTitle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });


          $(window).scroll(function() {
            $('#mySkillsSkills').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          // $(window).scroll(function() {
          //   $('#mySkillsSkills2').each(function(){
          //   var imagePos = $(this).offset().top;
          //
          //   var topOfWindow = $(window).scrollTop();
          //     if (imagePos < topOfWindow+600) {
          //       $(this).addClass("fadeIn");
          //     }
          //   });
          // });

          $(window).scroll(function() {
            $('#endorsement1').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+500) {
                $(this).addClass("slideRight");
              }
            });
          });

          $(window).scroll(function() {
            $('#endorsement2').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+500) {
                $(this).addClass("slideLeft");
              }
            });
          });

          $(window).scroll(function() {
            $('#endorsementsTitle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#portfolio').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });

          $(window).scroll(function() {
            $('#contactInput').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("slideRight");
              }
            });
          });


          $(window).scroll(function() {
            $('#contactMe').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("slideLeft");
              }
            });
          });

          $(window).scroll(function() {
            $('#contactTitle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });





          $('.contactForm').focus(function() {
            $(this).css('border', '2px solid #35A49D').css('background-color', 'rgba(255, 255, 255, 0.6)').css('transition', '0.5s');
          })

          $('.contactForm').blur(function() {
            $(this).css('border', '2px solid #ffe89c').css('background', 'transparent');
          })

          $('.contactArea').focus(function() {
            $(this).css('border', '2px solid #35A49D').css('background-color', 'rgba(255, 255, 255, 0.6)').css('transition', '0.5s');
          })

          $('.contactArea').blur(function() {
            $(this).css('border', '2px solid #ffe89c').css('background', 'transparent');
          })

          $('a[href^="#"]').on('click',function (e) {
	          e.preventDefault();
	          var target = this.hash;
	          var $target = $(target);
      	    $('html, body').stop().animate({
      	        'scrollTop': $target.offset().top - 77
      	    }, 900, 'swing', function () {
      	        // window.location.hash = target;
      	    });

      	});

            var topRange    = 200,  // measure from the top of the viewport to X pixels down
              edgeMargin    = 20,   // margin above the top or margin from the end of the page
              animationTime = 1200, // time in milliseconds
              contentTop    = [];


          // Set up content an array of locations
          $('.navBar ul li').find('a').each(function(){
           contentTop.push( $( $(this).attr('href') ).offset().top );
          })

          // adjust side menu
          $(window).scroll(function(){
           var winTop = $(window).scrollTop(),
               bodyHt = $(document).height(),
               vpHt   = $(window).height() + edgeMargin;  // viewport height + margin
           $.each( contentTop, function(i,loc){
            if ( ( loc > winTop - edgeMargin && ( loc < winTop + topRange || ( winTop + vpHt ) >= bodyHt ) ) ){
             $('.navBar ul li a')
              .removeClass('selected')
              .eq(i).addClass('selected');
            }
           })
          })












      }); //end jQuery


    } //end function

    return {
      restrict: 'A',
      link: linkFn

    };
  }); //end
