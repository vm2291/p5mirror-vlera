function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  
  let rowHeight = height / 3;
  stroke(0);
  line(0, rowHeight, width, rowHeight);
  line(0, 2 * rowHeight, width, 2 * rowHeight);

  let section;
  if (mouseY < rowHeight) {
    section = "Top Section";
  } else if (mouseY < 2 * rowHeight) {
    section = "Middle Section";
  } else {
    section = "Bottom Section";
  }

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(section, width / 2, height / 2);
}
