//
//  CONSTANTS
//
const
  // UI controls
  UP = document.querySelector('button.up'),
  DOWN = document.querySelector('button.down'),
  STEP = 20;


//
//  variables
//
let
  svg = document.querySelector('svg'),
  line = svg.querySelector('line'),
  x1 = parseInt(line.getAttribute('x1')),
  x2 = parseInt(line.getAttribute('x2')),
  y1 = parseInt(line.getAttribute('y1')),
  y2 = parseInt(line.getAttribute('y2'));




//
//  functions
//
UP.onclick = (e) => {
  y2 -= STEP;
  line.setAttribute('y2', y2);
  console.log(x1, x2, y1, y2);
};

DOWN.onclick = (e) => {
  y2 += STEP;
  line.setAttribute('y2', y2);
  console.log(x1, x2, y1, y2);
};





//
//  DOM is ready
//
document.addEventListener("DOMContentLoaded", function(){
  //UP.click();   // trigger click
});

