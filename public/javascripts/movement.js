document.addEventListener('DOMContentLoaded', ()=> {
  let keys = {32: false, 37:false, 38:false, 39:false, 40:false};

  let shotCount = 0;

  const pixel = document.getElementById("starting-pixel");
  const game = document.getElementById("game");

  const up = window.getComputedStyle(pixel, null).top;
  const left = window.getComputedStyle(pixel, null).left;

  let newUp = up.replace("px", "");
  let numUp = parseInt(newUp);

  let newLeft = left.replace("px", "");
  let numLeft = parseInt(newLeft);

  function moveUp() {
    numUp = numUp - 5;
    pixel.style.top = "" + numUp + "px";
  }


  function moveSquare(e) {
      
    console.log(e.which);

      switch(e.which) {
          case 38:
              numUp = numUp - 5;
              pixel.style.top = "" + numUp + "px";
              break
          case 37:
              numLeft = numLeft - 5;
              pixel.style.left = "" + numLeft + "px";
              break
          case 39:
              numLeft = numLeft + 5;
              pixel.style.left = "" + numLeft + "px";
              break
          case 40:
              numUp = numUp + 5;
              pixel.style.top = "" + numUp + "px";
              break
      }
  }

  function bullet(){

    const shotString = shotCount + "";
    let shotUp = numUp - 20;
    let shotLeft = numLeft + 13;
    const shot = document.createElement("div");
    shot.setAttribute("class", "shot");
    shot.setAttribute("id", shotString);
    shot.style.left = shotLeft + "px";
    shot.style.top = shotUp + "px";
    game.appendChild(shot);

    let newShotUp = shotUp - 1;

    let timer = setInterval(() => {
      document.getElementById(shotString).style.top = newShotUp + "px";
      newShotUp--;
      if (newShotUp < 0) {
          clearInterval(timer);
          shot.parentNode.removeChild(shot);
        }
    }, 5);

    shotCount++;

  }

  document.addEventListener("keydown", e => {

    console.log(e);
    console.log(e.which);
    keys[e.which] = true;
    if(keys[32] && keys[38]) {
      bullet();
      moveUp();
    } else if (keys[32]) {
      bullet();
    } else if(keys[38]) {
      moveUp();
    }
    console.log(keys);
  });

  document.addEventListener("keyup", e => {
    keys[e.which] = false;
    console.log(keys);
  });


})