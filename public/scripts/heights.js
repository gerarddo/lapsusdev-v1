
    function setWindowHeightTo(htmlClass) {
      let _welcomeHeight = $("#header").innerHeight();
      console.log(_welcomeHeight)
      let windowHeight = $(window).innerHeight() - _welcomeHeight;
      $(htmlClass).css('height', windowHeight );


      console.log("set window height was called")
    };
  
    function setVerticalCenterPositionTo(htmlClass) {
      let windowHeight = $(window).innerHeight();
      let elHeight = $(htmlClass).height();
      let marginTop = windowHeight/2 - elHeight/2;
  
      $(htmlClass).css('margin-top', marginTop);
    };
  


  