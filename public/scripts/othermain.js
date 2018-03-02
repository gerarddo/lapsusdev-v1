$(document).ready(function() {
  function setWindowHeightTo(htmlClass) {
    windowHeight = $(window).innerHeight();
    $(htmlClass).css('height', windowHeight);
  };

  function setVerticalCenterPositionTo(htmlClass) {
    let windowHeight = $(window).innerHeight();
    let elHeight = $(htmlClass).height();
    let marginTop = windowHeight/2 - elHeight/2;

    $(htmlClass).css('margin-top', marginTop);
  };

  setWindowHeightTo('.windowHeight');
  setVerticalCenterPositionTo('.yCenterPosition');
  
  $(window).resize(function() {
    setWindowHeightTo('.windowHeight');
    setVerticalCenterPositionTo('.yCenterPosition');
  });
});
