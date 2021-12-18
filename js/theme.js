(function($) {
'use strict';
    
       
  // PRELOADER
    $(window).on('load', function() {
        $('#page-loader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    
  // SCROLL TO TOP
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.scroll-to-top').addClass('reveal');
    } else {
        $('.scroll-to-top').removeClass('reveal');
    }
});
 
 
/* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.site-navigation,.trans-navigation').addClass('header-white');
        } else {
            $('.site-navigation,.trans-navigation').removeClass('header-white');
        }

    });

 
    
  // Smooth scrolling using jQuery easing
    let backtotop = select('.scroll-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function(event) {
    $('.navbar-collapse').collapse('hide');
  });

})(jQuery); // End of use strict
