'use strict';

$(function(){

  window.app = {}

  // Scrolls to the element
  app.goTo = function(section) {
    var selector = "#" + section;
    $(selector).ScrollTo({
      duration: 1000
    });
  };
});