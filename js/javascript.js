var unslider = $('.head-slider').unslider({
    autoplay: true,
    delay: 8000
});

$('.dir-arrow').click(function(event) {
  event.preventDefault();

  if ($(this).hasClass('next-arrow')) {
    unslider.data('unslider').next();
  } else {
    unslider.data('unslider').prev();
  }
});

$('.prev-arrow').hover(function() {
  $('.arrows.left').toggleClass('active-gradient-left');
});

$('.next-arrow').hover(function() {
  $('.arrows.right').toggleClass('active-gradient-right');
});

$('.prev-arrow').hover(function() {
  $('.arrows2.left').toggleClass('active-gradient-left');
});

$('.next-arrow').hover(function() {
  $('.arrows2.right').toggleClass('active-gradient-right');
});

$(function() {
    $(".typed-text1").typed({
        strings: ["Clarified^2000", "Fulfilled."],
        typeSpeed: 50,
        startDelay: 1000
    });
});



$(document).ready(function() {

    $(function(){

	// Instantiate MixItUp:

	$('#Container').mixItUp();

    });
/*
    if($(window).scrollTop() >= 658) {
        $('#navigation').removeClass('not-visible-nav');
    }
    else {
        $('#navigation').addClass('not-visible-nav');
    }

    $(window).scroll(function() {
        if($(window).scrollTop() >= 658) {
            $('#navigation').removeClass('not-visible-nav');
        }
        else {
            $('#navigation').addClass('not-visible-nav');
        }
    });
*/
    var locationString = location.pathname;
    if (locationString.indexOf('index') > -1 || locationString == '/') {
        $(window).scroll(function() {

            $('.header-row').css({
                'transform': 'translateY(' + 1 * $(window).scrollTop() / 2 + 'px)',
                'opacity': 1 - $(window).scrollTop() / 700
            });
            $('.unslider-arrow').css({
                'transform': 'translateY(' + 1 * $(window).scrollTop() / 2 + 'px)',
                'opacity': 1 - $(window).scrollTop() / 700,
                'height': 750 - $(window).scrollTop() / 2 + 'px'
            });

        });
    }
    else {
        $(window).scroll(function() {

            $('.header-row').css({
                'transform': 'translateY(' + 1 * $(window).scrollTop() / 2 + 'px)',
                'opacity': 1 - $(window).scrollTop() / 400
            });
            $('.unslider-arrow').css({
                'transform': 'translateY(' + 1 * $(window).scrollTop() / 2 + 'px)',
                'opacity': 1 - $(window).scrollTop() / 400,
                'height': 400 - $(window).scrollTop() / 2 + 'px'
            });

        });
    }

    new WOW().init();

    var executedSlider1 = false;
    setInterval(function() {
        if ($('.slide1').hasClass('unslider-active') && !executedSlider1) {
            $(function() {
                $(".typed-text1-1").typed({
                    strings: ["C"],
                    typeSpeed: 50,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(100 + 1000 / 4).animate({
                    opacity: 1
                });
                $(".typed-text1-2").typed({
                    strings: ["l"],
                    typeSpeed: 100,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(200 + 1200 / 4).animate({
                    opacity: 1
                });
                $(".typed-text1-3").typed({
                    strings: ["a"],
                    typeSpeed: 200,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(300 + 1400 / 4).animate({
                    opacity: 1
                });
                $(".typed-text1-4").typed({
                    strings: ["r"],
                    typeSpeed: 250,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(400 + 1600 / 4).animate({
                    opacity: 1
                });
                $(".typed-text1-5").typed({
                    strings: ["i"],
                    typeSpeed: 300,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(500 + 1800 / 4).animate({
                    opacity: 1
                });
                $(".typed-text1-6").typed({
                    strings: ["f"],
                    typeSpeed: 350,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(600 + 2000 / 4).animate({
                    opacity: 1
                });
                $(".typed-text1-7").typed({
                    strings: ["i"],
                    typeSpeed: 400,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(700 + 2200 / 4).animate({
                    opacity: 1
                });
                $(".typed-text1-8").typed({
                    strings: ["e"],
                    typeSpeed: 450,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(800 + 2400 / 4).animate({
                    opacity: 1
                });
                $(".typed-text1-9").typed({
                    strings: ["d"],
                    typeSpeed: 500,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(900 + 2600 / 4).animate({
                    opacity: 1
                });
            });
            executedSlider1 = true;
        }
    }, 10);

    setInterval(function() {
        if (!$('.slide1').hasClass('unslider-active') && executedSlider1) {
            executedSlider1 = false;
        }
    }, 10);

    var executedSlider2 = false;
    setInterval(function() {
        if ($('.slide2').hasClass('unslider-active') && !executedSlider2) {
            $(function() {
                $(".typed-text2-1").typed({
                    strings: ["C"],
                    typeSpeed: 50,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(100 + 1000 / 4).animate({
                    opacity: 1
                });
                $(".typed-text2-2").typed({
                    strings: ["l"],
                    typeSpeed: 100,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(200 + 1200 / 4).animate({
                    opacity: 1
                });
                $(".typed-text2-3").typed({
                    strings: ["a"],
                    typeSpeed: 200,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(300 + 1400 / 4).animate({
                    opacity: 1
                });
                $(".typed-text2-4").typed({
                    strings: ["r"],
                    typeSpeed: 250,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(400 + 1600 / 4).animate({
                    opacity: 1
                });
                $(".typed-text2-5").typed({
                    strings: ["i"],
                    typeSpeed: 300,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(500 + 1800 / 4).animate({
                    opacity: 1
                });
                $(".typed-text2-6").typed({
                    strings: ["f"],
                    typeSpeed: 350,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(600 + 2000 / 4).animate({
                    opacity: 1
                });
                $(".typed-text2-7").typed({
                    strings: ["i"],
                    typeSpeed: 400,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(700 + 2200 / 4).animate({
                    opacity: 1
                });
                $(".typed-text2-8").typed({
                    strings: ["e"],
                    typeSpeed: 450,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(800 + 2400 / 4).animate({
                    opacity: 1
                });
                $(".typed-text2-9").typed({
                    strings: ["d"],
                    typeSpeed: 500,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(900 + 2600 / 4).animate({
                    opacity: 1
                });
            });
            executedSlider2 = true;
        }
    }, 10);
    setInterval(function() {
        if (!$('.slide2').hasClass('unslider-active') && executedSlider2) {
            executedSlider2 = false;
        }
    }, 10);

    var executedSlider3 = false;
    setInterval(function() {
        if ($('.slide3').hasClass('unslider-active') && !executedSlider3) {
            $(function() {
                $(".typed-text3-1").typed({
                    strings: ["C"],
                    typeSpeed: 50,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(100 + 1000 / 4).animate({
                    opacity: 1
                });
                $(".typed-text3-2").typed({
                    strings: ["l"],
                    typeSpeed: 100,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(200 + 1200 / 4).animate({
                    opacity: 1
                });
                $(".typed-text3-3").typed({
                    strings: ["a"],
                    typeSpeed: 200,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(300 + 1400 / 4).animate({
                    opacity: 1
                });
                $(".typed-text3-4").typed({
                    strings: ["r"],
                    typeSpeed: 250,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(400 + 1600 / 4).animate({
                    opacity: 1
                });
                $(".typed-text3-5").typed({
                    strings: ["i"],
                    typeSpeed: 300,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(500 + 1800 / 4).animate({
                    opacity: 1
                });
                $(".typed-text3-6").typed({
                    strings: ["f"],
                    typeSpeed: 350,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(600 + 2000 / 4).animate({
                    opacity: 1
                });
                $(".typed-text3-7").typed({
                    strings: ["i"],
                    typeSpeed: 400,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(700 + 2200 / 4).animate({
                    opacity: 1
                });
                $(".typed-text3-8").typed({
                    strings: ["e"],
                    typeSpeed: 450,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(800 + 2400 / 4).animate({
                    opacity: 1
                });
                $(".typed-text3-9").typed({
                    strings: ["d"],
                    typeSpeed: 500,
                    startDelay: 1000,
                    showCursor: false
                }).animate({
                    opacity: 0
                }).delay(900 + 2600 / 4).animate({
                    opacity: 1
                });
            });
            executedSlider3 = true;
        }
    }, 10);
    setInterval(function() {
        if (!$('.slide3').hasClass('unslider-active') && executedSlider3) {
            executedSlider3 = false;
        }
    }, 10);
    if (locationString.indexOf('index') > -1 || locationString == '/') {
        $("body").mousemove(function(e) {
            var outOfBounds = false;
            if (e.pageY > 750) {
                $('.header-bg, .header-bg2, .header-bg3').css('transition', 'all .2s ease');
                $('.header-bg, .header-bg2, .header-bg3').addClass('centered-bg');
                outOfBounds = true;
            }
            else {
                $('.header-bg, .header-bg2, .header-bg3').css('transition', 'none');
                $('.header-bg, .header-bg2, .header-bg3').removeClass('centered-bg');
            }
        });
    }
    else {
        $("body").mousemove(function(e) {
            var outOfBounds = false;
            if (e.pageY > 400) {
                $('.header-bg, .header-bg2, .header-bg3').css('transition', 'all .2s ease');
                $('.header-bg, .header-bg2, .header-bg3').addClass('centered-bg');
                outOfBounds = true;
            }
            else {
                $('.header-bg, .header-bg2, .header-bg3').css('transition', 'none');
                $('.header-bg, .header-bg2, .header-bg3').removeClass('centered-bg');
            }
        });
    }

    $('.dropdown').hover(function() {
        $('.dropdown').toggleClass('open');
    });

    if ($(window).width() <= 971) {
        $('.portfolio-text').html('portfolio <i class="fa fa-caret-down"></i>');
    }
    else {
        $('.portfolio-text').html('portfolio');
    }

    $(window).resize(function() {
        if ($(window).width() <= 971) {
            $('.portfolio-text').html('portfolio <i class="fa fa-caret-down"></i>');
        }
        else {
            $('.portfolio-text').html('portfolio');
        }
    });

    $(".portfolio-tab").click(function(){
        if ($(window).width() > 971) {
            window.location = $(this).data("location");
        }
        else {
            $('.mobile-dropdown-container').toggleClass('open-mob-drop');
        }
    });

    $('.dropdown-menu').hover(
      $('.portfolio-tab').trigger('hover')
  );

  $('.full-btn3').click(function() {
    var serviceTitle = $(this).parent().children('h3').text();
    $('.service-detail-main-title').text(serviceTitle);
    $('.service-preview-detail-container').animate({
      'opacity': 0
    });
    $('.services-preview-container').animate({
      'opacity': 0
    });

    setTimeout(function() {
      $('.services-preview-container').css({
        'opacity': 1
      });
      $('.services-preview-container').toggleClass('hidden');
    }, 500);

    setTimeout(function() {
      $('.service-preview-detail-container').toggleClass('hidden');
    }, 501);

    setTimeout(function() {
      $('.service-preview-detail-container').animate({
        'opacity': 1
      });
    }, 502);

  });

  $('.fp').click(function() {
    $(this).toggleClass('active');
    setTimeout(function() {
      $('.proj-form1, .proj-form2').removeClass('hidden');
    }, 51);

    setTimeout(function() {
      $('.proj-form1, .proj-form2').animate({
        'opacity': 1
      });
    }, 52);
  });

  var firstFormAppeared = false;

  $('.other-textarea').keypress(function() {
    if ($('.other-textarea').val() !== '' && !firstFormAppeared && !$('.fp').hasClass('active')) {

      setTimeout(function() {
        $('.proj-form1, .proj-form2').removeClass('hidden');
      }, 51);

      setTimeout(function() {
        $('.proj-form1, .proj-form2').animate({
          'opacity': 1
        });
      }, 52);

      firstFormAppeared = true;
    }
    else if ($('.other-textarea').val() !== '' && $('.fp').hasClass('active')) {
      $('.fp').removeClass('active');
    }
  });

  var secondFormAppeared = false;

  $('.form-textarea').keypress(function() {
    if ($('.form-textarea').val() !== '' && !secondFormAppeared) {
      setTimeout(function() {
        $('.proj-form3').toggleClass('hidden');
      }, 51);

      setTimeout(function() {
        $('.proj-form3').animate({
          'opacity': 1
        });
      }, 52);
      secondFormAppeared = true;
    }
  });




  $('.form-textarea, .other-textarea').focus(function() {
    $(this).parent().toggleClass('inactive-textarea');
    $(this).parent().toggleClass('active-textarea');
  });

  $('.form-textarea, .other-textarea').focusout(function() {
    $(this).parent().toggleClass('inactive-textarea');
    $(this).parent().toggleClass('active-textarea');
  });

  $('.form-input').focus(function() {
    $(this).parent().toggleClass('inactive-input');
    $(this).parent().toggleClass('active-input');
  });

  $('.form-input').focusout(function() {
    $(this).parent().toggleClass('inactive-input');
    $(this).parent().toggleClass('active-input');
  });

  $('.full-btn4').click(function() {
    $('.services-preview-container').animate({
      'opacity': 0
    });
    $('.service-preview-detail-container').animate({
      'opacity': 0
    });

    setTimeout(function() {
      $('.service-preview-detail-container').css({
        'opacity': 1
      });
      $('.service-preview-detail-container').toggleClass('hidden');
    }, 500);
    setTimeout(function() {
      $('.services-preview-container').toggleClass('hidden');
    }, 501);
    setTimeout(function() {
      $('.services-preview-container').animate({
        'opacity': 1
      });
    }, 502);
  });

  $(function() {
    $('#deadline-input').datepicker();
  });



});

/* ==============================================
========== Navigation Scroll Effect =============
=============================================== */


$(document).ready(function () {


    var menu = $('#navigation');
/*
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.waypoint').offset().top - 200;

        if (y >= z) {
            menu.removeClass('not-visible-nav').addClass('visible-nav');
        }
        else{
            menu.removeClass('visible-nav').addClass('not-visible-nav');
        }
    });


/* ==============================================
Active Navigation Calling
=============================================== */
/*
$('body').scrollspy({
	target: '.nav-menu',
	offset: 95
});


/* ==============================================
Scroll Navigation
=============================================== */
/*
$(function() {


		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});

/* ==============================================
Drop Down Menu Fade Effect
=============================================== */

$('.nav-toggle').hover(function() {

    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250);
 });

/* ==============================================
Mobile Menu Button
=============================================== */

$('.mini-nav-button').click(function() {
    $(".nav-menu").slideToggle("9000");
 });

});
