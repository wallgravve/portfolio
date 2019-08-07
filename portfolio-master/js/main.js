(function ($) {
	"use strict";
	let nav = $('nav');
  let  navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })



})(jQuery);



$(document).ready(function(){
  $(window).scroll(function(){
  let pixels = 100; 
  let top = 1200;
    if ($(window).scrollTop() > pixels){
      $('.navbar-expand-md').addClass('navbar-reduce');
  $('.navbar-expand-md').removeClass('navbar-trans');

    } else {
      $('.navbar-expand-md').removeClass('navbar-trans');
     $('.navbar-expand-md').removeClass('navbar-reduce');

    }
      if ($(window).scrollTop() > top) {
          $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
          $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
  });




});

$(document).ready(function() {
  $('.carousel').slick({
    variableWidth: true,
    slidesToShow: 1,

    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    
      
    ]

  });
});
