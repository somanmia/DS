// Slider----//
  $('.carousel').carousel({
    interval:3000
  });
//Smooth Scroll----//
const scroll = new SmoothScroll('.navbar a[href*="#"]',{
       speed:900,
       speedAsDuration: true



});
//Counter UP----//
$(document).ready(function(){
  $('.counter').counterUp({
         delay: 10,
         time: 4000
     });

});
