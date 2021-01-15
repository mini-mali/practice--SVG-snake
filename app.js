//
//  CONSTANTS
//
const
  // UI controls
  UP = document.querySelector('button.up'),
  DOWN = document.querySelector('button.down'),
  LEFT = document.querySelector('button.left'),
  RIGHT = document.querySelector('button.right'),
  PLAY = document.querySelector('button.play'),
  // for how many pixels should the anchor point move?
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

LEFT.onclick = (e) => {
  console.log('LEFT');
};

RIGHT.onclick = (e) => {
  console.log('RIGHT');
};


//
//  DOM is ready
//
document.addEventListener("DOMContentLoaded", function(){
  //UP.click();   // trigger click
});




//
//  Keyboard control
//
document.addEventListener('keydown', function(event) {
    //const key = event.key;
    console.log(event.key);
});





//
//  Play
//
PLAY.onclick = (e) => {
  console.info('PLAY');
};


