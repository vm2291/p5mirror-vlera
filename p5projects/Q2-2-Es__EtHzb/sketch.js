let x = 200;
let y = 200;
let xSpeed = 3;
let ySpeed = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  x += xSpeed;
  y += ySpeed;
  if (x > width - 50 || x < 50) {
    xSpeed *= -1;
  }
  if (y > height - 50 || y < 50) {
    ySpeed *= -1;
  }
  circle(x, y, 100);
}
