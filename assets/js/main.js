window.addEventListener("load", event => {
  //Variable Declaration
  let projectImgs = document.getElementsByClassName("projectImgs");

  //Functions
  function slideDown (element) {
    element.style.maxHeight = "1000px";
    element.style.opacity = '1';
  };
  
  function slideUp(element) {
    element.style.maxHeight = '0';
    once( 1, function () {
      element.style.opacity = '0';
    });
  };
  
  function once (seconds, callback) {
    let counter = 0;
    let time = window.setInterval( () => {
      counter++;
      if ( counter >= seconds ) {
        callback();
        window.clearInterval( time );
      }
    }, 400 );
  };
  
  //Event Listener
  for (let i = 0; i < projectImgs.length; i++) {
    projectImgs[i].addEventListener("click", event => {
      let infoBox = projectImgs[i].nextElementSibling;
      if (infoBox.getAttribute("value") == undefined) {
        infoBox.setAttribute("value", "toggled");
        slideDown(infoBox);
      } else {
        slideUp(infoBox);
        infoBox.removeAttribute("value");
      }
    });
  }
});