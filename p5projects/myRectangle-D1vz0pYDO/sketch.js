function setup() {
  createCanvas(700, 400);
}

function draw() {
  //0-255 grayscale
  background(120);
  
  
  
  //stroke(10, 100, 100);

  //strokeWeight(3);
  
  noStroke();
  
  fill("turquoise");

  //x, y, width, height, radius
  rect(150, 100, 100, 100, 0);
  
  textAlign(CENTER);
  fill(255, 255, 255);
  text("VLERA", 197, 155);
  //red, green, blue
  //fill(255, 255,0);
  
  //x,y, diamter
  //circle(150, 100, 100)
}
