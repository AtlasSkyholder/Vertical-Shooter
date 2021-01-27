document.addEventListener('DOMContentLoaded', ()=> {
  const game = document.getElementById("game");

  const pixel = document.getElementById("starting-pixel");

  const ball = {
    a: 0,
    d: 0,
    w: 0,
    z: 0,
    speed: 2,
    posX: 0,
    posY: 0,
    el: document.querySelector('.ball')
  }
  
  function regKeyStrokes(e) {
    if (!'adwz'.includes(e.key)) {return;}
    ball[e.key] = (event.type === 'keyup') ? 0 : 1;
  }
  
  function animate() {
    const dX = ball.a * -ball.speed + ball.d * ball.speed;
    const dY = ball.w * -ball.speed + ball.z * ball.speed;
    const cS = (dX * dY === 0) ? 1 : 0.707;
    ball.posX += cS * dX;
    ball.posY += cS * dY;
    ball.el.style.transform = `translate(${ball.posX}px, ${ball.posY}px)`;
    requestAnimationFrame(animate);
  }
  
  document.addEventListener('keyup', regKeyStrokes);
  document.addEventListener('keydown', regKeyStrokes);
  
  requestAnimationFrame(animate);


});