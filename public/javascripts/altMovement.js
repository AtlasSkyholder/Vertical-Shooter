const data = {
  stageOne : {
    "1" : {
      pos: [400, 100],
      hitboxSize: [32, 32]
    },
    "2" : {
      pos: [200, 100],
      hitboxSize: [32, 32]
    }
  }
}

document.addEventListener('DOMContentLoaded', ()=> {

  console.log(Object.keys(data)[0]);

  const game = document.getElementById("game");
  const press = ['32', '37', '38', '39', '40'];
  let shotCount = 0;  //for creating unique IDs for each bullet element

  let enemyBottom = []; // area to check if the bullet hits

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

    if (pixel['32'] === 1) {
      bullet();
    }
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


      for (let j = shotLeft; j < shotLeft + 6; j++) {

        let a = 0;  //just a random variable to help break out of the loops and prevent errors.

        for ( let k = 0; k < enemyBottom.length; k++) {
          if (enemyBottom[k][0] === newShotUp && enemyBottom[k][1] === j) {
            clearInterval(timer);
            shot.parentNode.removeChild(shot);
            let dude = document.getElementById(Object.keys(data)[0]);  //this is now the problem, I will have to have it loop by enemies, 
            dude.parentNode.removeChild(dude);                         //when one is killed, I delete it from the object with all the enemies
            a = 1;
            break;
          }
 
        }
        if ( a === 1) {
          break;
        }
      }


    }, 5);



    shotCount++;

  }

  function enePOS(){

    for (const property in data.stageOne) {
      let enemy = data.stageOne[property];

      let eneY = enemy.pos[1];
      let eneX = enemy.pos[0];
  
      const mob = document.createElement("div");
      mob.setAttribute('class', 'enemy');
      mob.setAttribute('id', enemy);
      mob.style.left = eneX + 'px';
      mob.style.top = eneY + 'px';
      game.appendChild(mob);
  
      let eneYBottom = eneY + enemy.hitboxSize[1] - 1;
      let eneXBottom = eneX + enemy.hitboxSize[0] - 1;
      for (let i = eneX; i <= eneXBottom; i++) {
        enemyBottom.push([eneYBottom, i]);
      }
    }


  }



  function anime() {
    const dirX = pixel['37'] * -pixel.speed + pixel['39'] * pixel.speed;
    const dirY = pixel['38'] * -pixel.speed + pixel['40'] * pixel.speed;
    pixel.posX += dirX;
    pixel.posY += dirY;
    pixel.el.style.transform = `translate(${pixel.posX}px, ${pixel.posY}px)`;
    requestAnimationFrame(anime);
  }

  enePOS();

  document.addEventListener('keyup', keys);
  document.addEventListener('keydown', keys);
  
  requestAnimationFrame(anime);

});