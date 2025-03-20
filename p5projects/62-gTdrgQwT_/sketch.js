function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(210);
  
  for (let i = 0; i <= 10; i++) {
    let x = i * 60;
    line(x, height, mouseX, mouseY);
  }
}
