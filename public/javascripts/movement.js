document.addEventListener('DOMContentLoaded', ()=> {
  function moveSquare(e) {
      const pixel = document.getElementById("starting-pixel");
      const game = document.getElementById("game");

      const up = window.getComputedStyle(pixel, null).top;

      switch(e.which) {
          case 32:
              console.log("Space Bar");
              const shot = document.createElement("div");
              shot.setAttribute("id", "shot");
              shot.style.left = "100px";
              shot.style.top = "100px";
              game.appendChild(shot);
              break
          case 38:
              console.log("Arrow Up");
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