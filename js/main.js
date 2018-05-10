$(document).ready(function(){
  $('.go_to').click( function(){ // Catch click
var scroll_el = $(this).attr('href'); // take attribute content href
      if ($(scroll_el).length != 0) { // Error audit 
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // scrolling animate
      }
    return false; // turn off standard action
  });
});