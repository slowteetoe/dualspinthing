$(document).ready(function(){
  $('#topsies').bxSlider({
    nextSelector: '#top-slider-next',
    prevSelector: '#top-slider-prev',
    nextText: 'Onward →',
    prevText: '← Go back'
  });
  $('#bottomsies').bxSlider({
    nextSelector: '#bottom-slider-next',
    prevSelector: '#bottom-slider-prev',
    nextText: 'Onward →',
    prevText: '← Go back'
  });
});