var $ = require('jquery');
import 'lightSlider';
import 'lightGallery';

$(document).ready(function() {
  $('#lightGallery').lightSlider({
    item: 1,
    loop: true,
    gallery: true,
    slideMargin: 0,
    thumbItem: 3,
    speed: 500,
    
    onSliderLoad: function(el) {

    	el.lightGallery({

    		selector: '#lightGallery .lslide'

    	});
    }
  });
});

