document.addEventListener('DOMContentLoaded', ()=> {

  function moveSquare(e) {
      const pixel = document.getElementById("starting-pixel");
      const game = document.getElementById("game");

      const up = window.getComputedStyle(pixel, null).top;
      const left = window.getComputedStyle(pixel, null).left;
      
      console.log(up,left);

      let newUp = up.replace("px", "");
      let numUp = parseInt(newUp);

      let newLeft = left.replace("px", "");
      let numLeft = parseInt(newLeft);

      switch(e.which) {
          case 32:
              console.log("Space Bar");
              let shotUp = numUp - 20;
              let shotLeft = numLeft + 13;
              const shot = document.createElement("div");
              shot.setAttribute("id", "shot");
              shot.style.left = shotLeft + "px";
              shot.style.top = shotUp + "px";
              game.appendChild(shot);

              let newShotUp = shotUp - 1;

              let timer = setInterval(() => {
                document.getElementById("shot").style.top = newShotUp + "px";
                newShotUp--;
                if (newShotUp < 0) {
                    clearInterval(timer);
                    shot.parentNode.removeChild(shot);
                  }
              }, 5);
              
              break
          case 38:
              console.log("Arrow Up");
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