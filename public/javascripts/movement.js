document.addEventListener('DOMContentLoaded', ()=> {
  let keys = {32: false, 37:false, 38:false, 39:false, 40:false};

  let shotCount = 0;

  const pixel = document.getElementById("starting-pixel");
  const game = document.getElementById("game");

  let numUp = parseInt(window.getComputedStyle(pixel, null).top.replace("px", ""));
  let numLeft = parseInt(window.getComputedStyle(pixel, null).left.replace("px", ""));

  const gameWidth = parseInt(window.getComputedStyle(game,null).width.replace("px","")) - parseInt(window.getComputedStyle(pixel,null).width.replace("px",""));
  const gameHeight = parseInt(window.getComputedStyle(game,null).height.replace("px","")) - parseInt(window.getComputedStyle(pixel,null).height.replace("px",""));

  function moveUp() {
    numUp = numUp - 5;
    if (numUp <= 0) {
      numUp = 0;
    }
    pixel.style.top = "" + numUp + "px";
  }

  function moveDown() {
    numUp = numUp + 5;
    if (numUp >= gameHeight) {
      numUp = gameHeight;
    }
    pixel.style.top = "" + numUp + "px";
  }

  function moveLeft() {
    numLeft = numLeft - 5;
    if (numLeft <= 0) {
      numLeft = 0;
    }
    pixel.style.left = "" + numLeft + "px";
  }

  function moveRight() {
    numLeft = numLeft + 5;
    if (numLeft >= gameWidth) {
      numLeft = gameWidth;
    }
    pixel.style.left = "" + numLeft + "px";
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

    keys[e.which] = true;

    if (keys[32] && keys[37] && keys[38]) {    // Diagonal direction while shooting
      bullet();
      moveUp();
      moveLeft();
    } else if (keys[32] && keys[38] && keys[39]) {
      bullet();
      moveUp();
      moveRight();
    } else if (keys[32] && keys[39] && keys[40]) {
      bullet();
      moveDown();
      moveRight();
    } else if (keys[32] && keys[37] && keys[40]) {
      bullet();
      moveDown();
      moveLeft();
    } else if (keys[37] && keys[38]) {  // Diagonal direction without shooting
      moveUp();
      moveLeft();
    } else if (keys[38] && keys[39]) {
      moveUp();
      moveRight();
    } else if (keys[39] && keys[40]) {
      moveDown();
      moveRight();
    } else if (keys[37] && keys[40]) {
      moveDown();
      moveLeft();
    } else if(keys[32] && keys[37]) {  // Vertical or Horizontal movement while shooting
      bullet();
      moveLeft();
    } else if(keys[32] && keys[38]) {
      bullet();
      moveUp();
    } else if(keys[32] && keys[39]) {
      bullet();
      moveRight();
    } else if(keys[32] && keys[40]) {
      bullet();
      moveDown();
    } else if (keys[32]) {  // Shooting
      bullet();
    } else if (keys[37]) {  // Vertical or Horizontal movement
      moveLeft();
    } else if (keys[38]) {
      moveUp();
    } else if (keys[39]) {
      moveRight();
    } else if (keys[40]) {
      moveDown();
    }
  });

  document.addEventListener("keyup", e => {
    keys[e.which] = false;
  });


})