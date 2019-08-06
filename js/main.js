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


// $(document).ready(function(){

// $(window).scroll(function(){
//   $('nav').ToogleClass('scrolled', $(this).scrollTop() > 800);
// });
// });



// function inViewport( element ) {
//   // Get the elements position relative to a viewport
//   var bb = element.getBoundingClientRect();

//   //Check if the element is oputside the viewport
//   //Then invert the return value because you want to know the opposite

//   return(bb.top > innerHeight || bb.bottom < 0);

// }
// var myElement = document.querySelektor('fade-scroll-anim');

// //listen for the scroll event

// document.addEventListener('scroll', event => {
//   //  check the viewport statyus
//     if (inViewport ( myElement)) {
//       myElement.style.transform= 'translate(0, -1300px)';
//     }
//     else {
//       style.transform = ''; }

// })