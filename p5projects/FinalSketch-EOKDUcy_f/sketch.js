let drop1 = 180;  
let drop2 = 200;  
let drop3 = 250;  
let drop4 = 210;  
let speed = 2;     
let bg;            

function preload() {
  // Loading the background image
  bg = loadImage('CANVARAINBG.png');  
}

function setup() {
  createCanvas(800, 800);  
}

function draw() {
  // Setting the background image
  background(bg);  

  // Changing the raindrops speed
  if (mouseIsPressed) {
    // If mouse is pressed -  slow raindrops
    speed = 2;  
  } else {
    // If mouse is not pressed - fast raindrops
    speed = 17;  
  }

  fill(51, 153, 255);
  noStroke();  

  // Drawing and moving each raindrop down the canvas
  ellipse(200, drop1, 10, 20);  
  drop1 = drop1 + speed;  
  if (drop1 > height) {  
    drop1 = 180;  
  }

  ellipse(400, drop2, 10, 20);  
  drop2 = drop2 + speed;  
  if (drop2 > height) {  
    drop2 = 200;  
  }

  ellipse(600, drop3, 10, 20);  
  drop3 = drop3 + speed;  
  if (drop3 > height) {  
    drop3 = 250;  
  }

  ellipse(700, drop4, 10, 20);  
  drop4 = drop4 + speed;  
  if (drop4 > height) {  
    drop4 = 210;  
  }
}
