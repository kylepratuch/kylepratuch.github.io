//jQuery
$(document).ready(function() {

  $('img.EdBuilder').click(function(element) {
    $('.EdBuilder-overlay').lightbox_me({
      centered:true
    });
  element.preventDefault();
  });

  $('img.StayCation').click(function(element) {
    $('.StayCation-overlay').lightbox_me({
      centered:true
    });
  element.preventDefault();
  });

  $('img.BeerMe').click(function(element) {
    $('.BeerMe-overlay').lightbox_me({
      centered:true
    });
  element.preventDefault();
  });

});
