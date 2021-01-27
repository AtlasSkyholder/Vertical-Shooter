document.addEventListener('DOMContentLoaded', ()=> {
  const game = document.getElementById("game");

  const pixel = document.getElementById("starting-pixel");

  let bolPixel = false;

  let numLeft = parseInt(window.getComputedStyle(pixel, null).left.replace("px", ""));

  let id;

  function movePixel() {
    if(bolPixel === false && numLeft === 500) {
      bolPixel = true;
    } else if (bolPixel === false) {
      numLeft++;
    } else if (bolPixel && numLeft === 400) {
      bolPixel = false;
    } else if (bolPixel) {
      numLeft--;
    }

    pixel.style.left = numLeft + "px";

    id = requestAnimationFrame(movePixel);
  }

  id = requestAnimationFrame(movePixel);

  document.getElementById("stop").addEventListener("click", () => {
    cancelAnimationFrame(id);
  })

  document.getElementById("start").addEventListener("click", () => {
    id = requestAnimationFrame(movePixel);
  })
})