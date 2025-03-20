// Part 1
let xPosition1 = 200, yPosition1 = 200;

// Part 2
let xPosition2a = 200, yPosition2a = 200; 
let xPosition2b = 200, yPosition2b = 200; 
let xPosition2c = 200, yPosition2c = 200; 

// Part 3
let xPosition3a = 200, yPosition3a = 200; 
let xPosition3b = 200, yPosition3b = 200; 
let xPosition3c = 200, yPosition3c = 200; 
let xPosition3d = 200, yPosition3d = 200; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  // Part 1
  circle(xPosition1, yPosition1, 50);
  xPosition1 = xPosition1 + 1;

  // Part 2
  circle(xPosition2a, yPosition2a, 50);
  xPosition2a = xPosition2a - 1;

  circle(xPosition2b, yPosition2b, 50);
  yPosition2b = yPosition2b - 1;

  circle(xPosition2c, yPosition2c, 50);
  yPosition2c = yPosition2c + 1;

  // Part 3
  circle(xPosition3a, yPosition3a, 50);
  xPosition3a = xPosition3a - 1;
  yPosition3a = yPosition3a - 1;

  circle(xPosition3b, yPosition3b, 50);
  xPosition3b = xPosition3b + 1;
  yPosition3b = yPosition3b - 1;

  circle(xPosition3c, yPosition3c, 50);
  xPosition3c = xPosition3c - 1;
  yPosition3c = yPosition3c + 1;

  circle(xPosition3d, yPosition3d, 50);
  xPosition3d = xPosition3d + 1;
  yPosition3d = yPosition3d + 1;

  // Part 4
  xPosition1 = xPosition1 + 9;
}
