var $ = require('jquery');
import 'lightSlider';

$(document).ready(function() {
  $('#lightSlider').lightSlider({
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 8,
    speed: 500,
    adaptiveHeight: false,
    auto: true
  });
});
