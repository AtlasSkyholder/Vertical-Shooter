document.addEventListener('DOMContentLoaded', ()=> {
  const game = document.getElementById("game");
  const press = ['32', '37', '38', '39', '40'];
  let shotCount = 0;  //for creating unique IDs for each bullet element

  const pixel = {
    '38': 0,  //arrow-up
    '40': 0,  //arrow-down
    '37': 0,  //arrow-left
    '39': 0,  //arrow-right
    '32': 0,  //space-bar -> shot
    speed: 2,
    posX: 400,
    posY: 300,
    el: document.getElementById("starting-pixel")
  };

  function keys(e) {
    if (!press.includes(e.which + '')) {return;}
    pixel[e.which + ''] = (event.type === 'keyup') ? 0 : 1;
  }

  function bullet(){

    const shotString = shotCount + "";
    let shotUp = pixel.posY - 20;
    let shotLeft = pixel.posX + 13;
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

  function anime() {
    const dirX = pixel['37'] * -pixel.speed + pixel['39'] * pixel.speed;
    const dirY = pixel['38'] * -pixel.speed + pixel['40'] * pixel.speed;
    pixel.posX += dirX;
    pixel.posY += dirY;
    pixel.el.style.transform = `translate(${pixel.posX}px, ${pixel.posY}px)`;
    if (pixel['32'] === 1) {
      bullet();
    }
    requestAnimationFrame(anime);
  }

  document.addEventListener('keyup', keys);
  document.addEventListener('keydown', keys);
  
  requestAnimationFrame(anime);

});