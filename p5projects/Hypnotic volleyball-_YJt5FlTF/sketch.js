let fib1 = 0;    // First Fibonacci number
let fib2 = 1;    // Second Fibonacci number
let angle = 0;   // Angle to position each new circle in the spiral
let x, y;        // Positions for each circle

function setup() {
  createCanvas(1600, 1600);  // Square canvas to give space for the spiral
  background(255);         // White background
  fill(150, 200, 250);     // Soft blue color for circles
  x = width / 2;           // Start in the center
  y = height / 2;
}

function draw() {
  // Nothing happens automatically here, only when the mouse is clicked
}

function mousePressed() {
  // Calculate the next Fibonacci number
  let circleSize = fib1 + fib2;

  // Draw a circle at the current position (x, y)
  ellipse(x, y, circleSize, circleSize);

  // Update Fibonacci numbers for the next step
  fib1 = fib2;
  fib2 = circleSize;

  // Move to the next position in a spiral
  angle += PI / 4;                  // Increase angle to move in a circular direction
  x += cos(angle) * circleSize+5;      // Update x position using cosine of angle
  y += sin(angle) * circleSize+5;      // Update y position using sine of angle
}
