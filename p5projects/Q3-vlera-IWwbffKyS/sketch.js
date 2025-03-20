function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // top left
  if (mouseX < width / 2 && mouseY < height / 2) {
    fill(0);
    rect(0, 0, width / 2, height / 2);
  } 
  
  // top right
  if (mouseX >= width / 2 && mouseY < height / 2) {
    fill(255, 0, 0);
    rect(width / 2, 0, width / 2, height / 2);
  } 
  
  // bottom right
  if (mouseX >= width / 2 && mouseY >= height / 2) {
    fill(0, 255, 0);
    rect(width / 2, height / 2, width / 2, height / 2);
  } 
  
  // bottom left
  if (mouseX < width / 2 && mouseY >= height / 2) {
    fill(0, 0, 255);
    rect(0, height / 2, width / 2, height / 2);
  }
}
