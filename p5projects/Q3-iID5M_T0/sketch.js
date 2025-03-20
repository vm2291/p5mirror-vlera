function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  
  let buttonX = 150;
  let buttonY = 150;
  let buttonSize = 100;
  
  let insideButton = mouseX > buttonX && mouseX < buttonX + buttonSize && mouseY > buttonY && mouseY < buttonY + buttonSize;

  if (insideButton && mouseIsPressed) {
    fill(0);
  } else if (insideButton) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  
  rect(buttonX, buttonY, buttonSize, buttonSize);
}
