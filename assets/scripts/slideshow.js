 /* http://www.webchiefdesign.co.uk/blog/simple-jquery-slideshow/ */
function slideshow() {

      var currentPosition = 0;
      var slideWidth = 470;
      var slides = $('.slide');
      var numberOfSlides = slides.length;
      var slideShowInterval;
      var speed = 3000;

      console.log(numberOfSlides);
      slideShowInterval = setInterval(changePosition, speed);
      slides.wrapAll('<div id="slidesHolder"></div>');
      
      slides.css({ 'float' : 'left' });
      
      $('#slidesHolder').css('width', slideWidth * numberOfSlides);
      
      
      function changePosition() {
         if(currentPosition == numberOfSlides - 1) {
            currentPosition = 0;
         } else {
            currentPosition++;
         }
         moveSlide();
      }
      
      
      function moveSlide() {
            $('#slidesHolder')
              .animate({'marginLeft' : slideWidth*(-currentPosition)});
      }

   }

$(document).ready(function(){

 slideshow();

});
  