function setup() {
  createCanvas(500, 500);
  background("#CEC0D8");
  angleMode(DEGREES);
  
  //dress
  rectMode(CENTER);
  fill(55, 153, 202);
  rect(244, 470, 330, 190, 180);
  
  //hijab
  noStroke();
  fill(15, 33, 121);
  arc(200, 280, 300, 380, 120, 90, OPEN);
  arc(250, 420, 200, 250, 120, 90, OPEN); 
  
  //face
  noStroke();
  fill(230, 217, 213);
  ellipse(220, 265, 200, 242);  
  
  
}


/*function draw() {
  //background(50);
}*/