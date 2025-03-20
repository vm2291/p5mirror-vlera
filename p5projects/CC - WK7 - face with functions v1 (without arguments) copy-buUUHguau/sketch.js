

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  strokeWeight(8);
}

function draw() {
  background(220);
  drawHead();
  drawEyes();
  drawMouth();
  cheeks(100, 200, 30);
  cheeks(320, 180, 25);
  cheeks(330, 165, 20);
  
  cheeks(300, 200, 30);
  cheeks(80, 180, 25);
  cheeks(70, 165, 20);
  nose ();
}

function drawEyes() {
  fill(255)
  ellipse(150, 150, 40, 100);
  ellipse(250, 150, 40, 100);
}

function drawMouth() {
  arc(200, 235, 200, 160, 0, 180, CHORD);
}

function drawHead() {
  circle(200, 200, 300);
}

function cheeks(x,y, size){
  
circle(x, y, size);
circle(x, y, size);
  
}
function nose (){
  circle (200, 190, 30)
}

