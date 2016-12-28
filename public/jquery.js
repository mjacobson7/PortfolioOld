angular.module('myPortfolio')
  .directive('jqueryDirective', function() {
    var linkFn;
    linkFn = function(scope, element, attrs) {

      $( document ).ready(function() {

        $(this).scrollTop(0);

        $(window).bind('scroll', function() {
      	   var navHeight = $( window ).height() + 30;
      			 if ($(window).scrollTop() > navHeight) {
      				 $('.navBar').addClass('fixed');
               $('.aboutMeContainer').addClass('padding');
      			 }
      			 else {
      				 $('.navBar').removeClass('fixed');
               $('.aboutMeContainer').removeClass('padding');

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
            $('#mySkillsTitle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeIn");
              }
            });
          });


          $(window).scroll(function() {
            $('#mySkillsSkills1').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("hatch");
              }
            });
          });

          $(window).scroll(function() {
            $('#mySkillsSkills2').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+600) {
                $(this).addClass("hatch");
              }
            });
          });

          $('.parallax').parallax();

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

          









      }); //end jQuery


    } //end function

    return {
      restrict: 'A',
      link: linkFn

    };
  }); //end
