let dropY = 0;  // Starting position for the raindrop
let speed = 2;  // Default speed of the raindrop

function setup() {
  createCanvas(800, 800); // Create a canvas
}

function draw() {
  background(220); // Light gray background

  // Check mouse position and adjust speed
  if (mouseX < width / 2) {
    speed = 8; // Fast raindrop when mouse is on the left half
  } else {
    speed = 2; // Slow raindrop when mouse is on the right half
  }

  // Draw the blue raindrop (oval shape to look like rain)
  fill(0, 0, 255); // Blue color
  noStroke(); // No border for the raindrop
  ellipse(width / 2, dropY, 10, 20); // Raindrop with stretched height (10x20)

  // Move the raindrop down
  dropY += speed;

  // Reset raindrop position when it goes off the screen
  if (dropY > height) {
    dropY = 0;
  }
}
