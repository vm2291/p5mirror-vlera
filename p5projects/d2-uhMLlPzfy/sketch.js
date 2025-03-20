let num1 = 0;
let num2 = 1;
let angle = 0; // initial angle
let angleIncrement = 3.14 / 4; // controls the "tightness" of the spiral

function setup() {
  createCanvas(800, 800);
  background(255);
  fill(150, 200, 250);
  angleMode(RADIANS);
}

function mousePressed() {
  let circleSize = num1 + num2;
  let radius = circleSize * 2; // Increase radius with each step in the sequence
  let x = width / 2 + cos(angle) * radius;
  let y = height / 2 + sin(angle) * radius;

  circle(x, y, circleSize);
  
  num1 = num2;
  num2 = circleSize;
  angle += angleIncrement; // increment the angle for the next circle
}
