let x = 200;
let xSpeed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  x += xSpeed;
  if (x > width - 50 || x < 50) {
    xSpeed *= -1;
  }
  circle(x, 200, 100);
}
