// First Fibonacci number
let num1 = 0;

// Second Fibonacci number
let num2 = 1;

// Starting horizontal position for the first circle
let x = 50;      

function setup() {
  createCanvas(800, 800); 
  background(255);        
  fill(150, 200, 250);     
}


function mousePressed() {
  // Calculating the next Fibonacci number
  let circleSize = num1 + num2;
  
  // Drawing a circle with this size
  circle(x, height / 2, circleSize);
  
  // Updating the numbers for the next step
  num1 = num2;
  num2 = circleSize;
  
  // Moving to the right for the next circle
  x += circleSize+15;
}
