// numberGenerator
jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 20,
        time: 1000 
    });
    });
// owlCarousel
$('.owl-one').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    margin: 15,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:true,
        },
        600:{
          items:2,
          nav:true,
          dots:true,
        },
        900:{
          items:3
        },
    }
});
$('.owl-two').owlCarousel({
  loop:true,
  nav:false,
  dots:true,
  margin: 30,
  autoplay:false,
  autoplayTimeout:3000,
  smartSpeed:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1,
          nav:true,
          dots:true,
      },
  }
});
$('.owl-three').owlCarousel({
  loop:true,
  nav:false,
  dots:true,
  autoplay:false,
  autoplayTimeout:3000,
  smartSpeed:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:3,
          nav:true,
          dots:true,
      },
  }
});
// SmoothScroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// Fancybox
Fancybox.bind("#gallery a", {
  groupAll: true, // Group all items
  on: {
    ready: (fancybox) => {
      console.log(`fancybox #${fancybox.id} is ready!`);
    },
  },
});

