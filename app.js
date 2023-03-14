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
  console.log(x1, y1, x2, y2);
};

DOWN.onclick = (e) => {
  y2 += STEP;
  line.setAttribute('y2', y2);
  console.log(x1, y1, x2, y2);
};

LEFT.onclick = (e) => {
  x2 -= STEP;
  line.setAttribute('x2', x2);
  console.log(x1, y1, x2, y2);
};

RIGHT.onclick = (e) => {
  x2 += STEP;
  line.setAttribute('x2', x2);
  console.log(x1, y1, x2, y2);
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

  //  TODO - optimize - implement "callstack"
  //  https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
  //
  switch (event.key) {
    case "ArrowUp":
      UP.click();
      break;
    case "ArrowRight":
      RIGHT.click();
      break;
    case "ArrowDown":
      DOWN.click();
      break;
    case "ArrowLeft":
      LEFT.click();
      break;
    //
    // space bar
    //
    case " ":
      PLAY.click();
      break;
  }
});





//
//  Play
//
PLAY.onclick = (e) => {
  console.info('PLAY');


  //
  //  get line length
  //
  let lineLength = line.getTotalLength();
  console.log(lineLength);
};











































