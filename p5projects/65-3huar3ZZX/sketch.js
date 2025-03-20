let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let currentColor = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(colors[currentColor]);
}

function mousePressed() {
  currentColor++;
  if (currentColor >= colors.length) {
    currentColor = 0;
  }
}
