function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(255,0,0)
  
  if (mouseX < width/4) {
    rect(0, 0, width / 4, height);
  } else if (mouseX < width/4 * 2) {
    rect(width / 4, 0, width / 4, height)
  } else if (width/4 * 3, 0, width / 4, height) {
    rect(width / 4*2, 0, width / 4, height)
    }
  else {
    rect(width/4*3, 0, width / 4, height);
  }
}