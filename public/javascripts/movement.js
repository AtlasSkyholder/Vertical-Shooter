document.addEventListener('DOMContentLoaded', ()=> {
  function moveSquare(e) {
      const pixel = document.getElementById("starting-pixel");
      switch(e.which) {
          case 38:
              console.log("Arrow Up");
              let up = window.getComputedStyle(pixel, null).top;
              let newUp = up.replace("px", "");
              let numUp = parseInt(newUp);
              let newNumUp = numUp - 5;
              pixel.style.top = "" + newNumUp + "px";
              console.log(up);
              console.log(newUp);
              break
          case 37:
              console.log("Arrow Left");
              break
          case 39:
              console.log("Arrow Right");
              break
          case 40:
              console.log("Arrow Down");
              break
      }
  }

  document.addEventListener("keyup", moveSquare);

})