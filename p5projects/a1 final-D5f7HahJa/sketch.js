function setup() {
  createCanvas(500, 500);
  background("#CEC0D8");
  
  //Using degrees instead of radians for angles
  angleMode(DEGREES);

  // ---Dress/shoulders ---
  noStroke();
  fill(55, 153, 202);
  //x, y, width, height, radius
  rect(width * 0.16, height * 0.75, width * 0.66, height * 0.38, 180);

  // ---hijab ---
  noStroke();
  fill(15, 33, 121);
 arc(width * 0.4, height * 0.56, width * 0.6, height * 0.76, 120, 90, CHORD);
  arc(width * 0.5, height * 0.84, width * 0.4, height * 0.5, 120, 90, CHORD);

  // ---face---
  noStroke();
  fill(230, 217, 213);
  ellipse(width * 0.44, height * 0.53, width * 0.4, height * 0.48);
}
