let x = 200;
let y = 200;
let xSpeed = 3;
let ySpeed = 2;
let img;

function preload() {
  img = loadImage('star.png'); 
}

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

  image(img, x - 50, y - 50, 100, 100);
}
