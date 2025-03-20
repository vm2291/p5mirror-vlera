function setup() {
  
  angleMode(DEGREES);
  createCanvas(400, 400);
  background(220);

  stroke(255, 160, 0); 
  strokeWeight(8);
  fill(255, 230, 0);
  circle(200, 200, 300);

  stroke(130, 70, 3);
  fill(160, 100, 8);
  ellipse(150, 150, 40, 100);
  ellipse(250, 150, 40, 100);

  fill(160, 100, 8);
  arc(200, 225, 200, 160, 0, 180, CHORD);
  fill(255);
  arc(200, 225, 200, 80, 0, 180, CHORD);
}
