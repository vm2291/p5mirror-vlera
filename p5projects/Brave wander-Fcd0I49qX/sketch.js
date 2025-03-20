let dropY1 = 0;
let dropY2 = -50;
let dropY3 = -100;
let dropY4 = -150;
let speed = 2;  
let bg;  

// Loading the image
function preload() {
 // bg = loadImage('CANVARAINBG.png');  
}

function setup() {
  createCanvas(800, 800);  
}

function draw() {
  background(220);  // Set the background image

  // Change speed depending on mouse position
  if (mouseX < width / 2) {
    speed = 8;  // Fast raindrops on the left half
  } else {
    speed = 2;  // Slow raindrops on the right half
  }

  // Set the raindrop color to blue
  fill(51, 153, 255);
  noStroke();  // No outline around the raindrops

  // Draw and move each raindrop down the canvas
  ellipse(200, dropY1, 10, 20);  // Raindrop 1
  dropY1 += speed;  // Move raindrop 1
  if (dropY1 > height) {
    dropY1 = 0;  // Reset to the top
  }

  ellipse(400, dropY2, 10, 20);  // Raindrop 2
  dropY2 += speed;  // Move raindrop 2
  if (dropY2 > height) {
    dropY2 = 0;  // Reset to the top
  }

  ellipse(600, dropY3, 10, 20);  // Raindrop 3
  dropY3 += speed;  // Move raindrop 3
  if (dropY3 > height) {
    dropY3 = 0;  // Reset to the top
  }

  ellipse(700, dropY4, 10, 20);  // Raindrop 4
  dropY4 += speed;  // Move raindrop 4
  if (dropY4 > height) {
    dropY4 = 0;  // Reset to the top
  }
}
