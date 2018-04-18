$(document).ready(function() {
  function setWindowHeightTo(htmlClass) {

    let _welcomeHeight = $("#welcome").innerHeight();
    console.log(_welcomeHeight)
    let windowHeight = $(window).innerHeight() - _welcomeHeight;
    $(htmlClass).css('height', windowHeight );
  };

  // function setVerticalCenterPositionTo(htmlClass) {
  //   let windowHeight = $(window).innerHeight();
  //   let elHeight = $(htmlClass).height();
  //   let marginTop = windowHeight/2 - elHeight/2;

  //   $(htmlClass).css('margin-top', marginTop);
  // };

  setWindowHeightTo('.fillRemainingHeight');
  // setVerticalCenterPositionTo('.yCenterPosition');
  
  $(window).resize(function() {
    setWindowHeightTo('.fillRemainingHeight');
    // setVerticalCenterPositionTo('.yCenterPosition');
  });
});

