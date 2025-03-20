let dropY1 = 300;  // Starting position of raindrop 1 inside the canvas
let dropY2 = 250;  // Starting position of raindrop 2 inside the canvas
let dropY3 = 200;  // Starting position of raindrop 3 inside the canvas
let dropY4 = 150;  // Starting position of raindrop 4 inside the canvas
let speed = 2;     // Initial speed of raindrops
let bg;            // Variable for background image

// Loading the image
function preload() {
  bg = loadImage('CANVARAINBG.png');  // Load the background image
}

// Set up the canvas
function setup() {
  createCanvas(800, 800);  // Create a canvas of 800x800 pixels
}

// Draw the raindrops on the canvas
function draw() {
  background(bg);  // Set the background image

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
  ellipse(200, dropY1, 10, 20);  // Draw raindrop 1
  dropY1 = dropY1 + speed;  // Move raindrop 1
  if (dropY1 > height) {  
    dropY1 = 0;  // Reset to the top if it goes off the canvas
  }

  ellipse(400, dropY2, 10, 20);  // Draw raindrop 2
  dropY2 = dropY2 + speed;  // Move raindrop 2
  if (dropY2 > height) {  
    dropY2 = 0;  // Reset to the top
  }

  ellipse(600, dropY3, 10, 20);  // Draw raindrop 3
  dropY3 = dropY3 + speed;  // Move raindrop 3
  if (dropY3 > height) {  
    dropY3 = 0;  // Reset to the top
  }

  ellipse(700, dropY4, 10, 20);  // Draw raindrop 4
  dropY4 = dropY4 + speed;  // Move raindrop 4
  if (dropY4 > height) {  
    dropY4 = 0;  // Reset to the top
  }
}
