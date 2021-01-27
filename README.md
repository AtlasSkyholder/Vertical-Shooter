# Vertical-Shooter


Attempting to create a vertical shooter in a browser with HTML, CSS and Javascript.

movement.js - While I was successful at creating a cube as a placeholder for a future ship that shoots bullets represented as a green rectangle, I ran into an issue where the eventlistener 'keyup' was canceling the eventlistener 'keydown' and so stopping the movement of the cube altogether.
  It seems the way to solve this is by using an animation method that works like setInterval, where it's constantly looping and checking what keys are down.

newMovement.js - simple exercise to try to understand and learn requestAnimationFrame method.

altMovement.js - trying to merge my previous work for vertical shooter with requestAnimationFrame and a solution I came accross at StackOverFlow https://stackoverflow.com/questions/61455932/javascript-eventlistener-multiple-keydown-stops-after-one-key-triggers-keyup