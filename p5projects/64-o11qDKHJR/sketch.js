function setup() {
  createCanvas(400, 360);
}

function draw() {
  background(240);
  drawCircle();
  drawEllipses();
  drawPoints();
  drawLines();
  drawTriangle();
  drawArc();
  drawSmallTriangle();
  drawShortLines();
}

function drawCircle() {
  fill(180, 100);
  strokeWeight(2);
  circle(200, 100, 150);
}

function drawEllipses() {
  strokeWeight(2);
  ellipse(100, 80, 40, 20);
  strokeWeight(1);
  ellipse(210, 100, 40, 20);
}

function drawPoints() {
  strokeWeight(3);
  point(110, 80);
  point(220, 100);
}

function drawLines() {
  strokeWeight(1);
  for (let i = 0; i < 4; i++) {
    line(90 + i * 10, 65, 100 + i * 10, 45);
  }

  for (let i = 0; i < 4; i++) {
    line(195 + i * 10, 85, 205 + i * 10, 65);
  }
}

function drawTriangle() {
  strokeWeight(2);
  triangle(160, height, 263, 202, 263, height);
}

function drawArc() {
  strokeWeight(1);
  arc(175, 200, 175, 175, 0, HALF_PI, PIE);
}

function drawSmallTriangle() {
  strokeWeight(1);
  triangle(120, 225, 190, 100, 190, 225);
}

function drawShortLines() {
  strokeWeight(3);
  line(150, 245, 190, 250);
  line(155, 260, 190, 250);
}
