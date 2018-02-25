var aboutSection = $("#about")[0];
var Yposition = 0;
// console.log(body[0])


// body.scroll(function() {

//     var aboutOffset = $("#about").offset()

//     // console.log(aboutOffset)

//     if(about.offset() >= -5){
//         console.log("welcome-img")
//         $("body").css("background-image", "url(../images/workspace.jpg)")
//     } else if (about.offset() < -5){
//         console.log("workspace")
//         $("body").css("background-image", "url(../images/welcome-img.jpg)")
//     }
// })

function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
   
  // deal with the page getting resized or scrolled
  window.addEventListener("scroll", updatePosition, false);



  window.addEventListener("scroll", changeBgImage, false);
  window.addEventListener("resize", updatePosition, false);
   
  function updatePosition() {
    // add your code to update the position when your browser
    // is resized or scrolled
  }

  var backgrounds = [
    {
        image: "url(../images/workspace.jpg)",
        toggle: false
    }, {
        image: "url(../images/welcome-img.jpg)",
        toggle: true   
    }
  ]
  $("html")[0].style.backgroundImage = backgrounds[1].image

  function changeBgImage(){
      Yposition = getPosition(aboutSection).y;
      if(Yposition < -5 && backgrounds[1].toggle === true){
        $("html")[0].style.backgroundImage = backgrounds[0].image
        backgrounds[0].toggle = true;
        backgrounds[1].toggle = false;
      } else if (Yposition >= -5 && backgrounds[0].toggle === true){
        $("html")[0].style.backgroundImage = backgrounds[1].image
        backgrounds[0].toggle = false;
        backgrounds[1].toggle = true;
      }
  }