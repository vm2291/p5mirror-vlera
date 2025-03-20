function setup() {
  createCanvas(600, 600);
  background(255);

  for (let i = 0; i < 5; i++) {
    let diameter = 250 - i * 50;
    circle(300, 300, diameter);
  }
}
