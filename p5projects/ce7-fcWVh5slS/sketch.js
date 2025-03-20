let drop1 = 180;
let drop2 = 200;
let drop3 = 250;
let drop4 = 210;
let speed = 10; // initial speed
let bg;
let serial = new p5.WebSerial(); // instance of p5.webserial library
let inData; 
let portButton;

function preload() {
  bg = loadImage('CANVARAINBG.png');
}

function setup() {
  makePortButton();
  // check to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  } else {
    // Set up serial communication
    setupSerial();
  }
  
  createCanvas(800, 800);
}

function draw() {
  
  // Setting the background image
  background(bg);

  if (inData) {
    // Mapping the potentiometer values 0-1023 to speed range 1-45
    speed = map(inData, 0, 1023, 1, 45);
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

/*------------------------------------*\
  Functions for Serial Input
\*------------------------------------*/

// Serial event function to handle incoming data
function serialEvent() {
  inData = Number(serial.readString().trim()); // read and trim incoming data
}

// Set up WebSerial connection
function setupSerial() {
  serial.getPorts();
  serial.on("noport", makePortButton);
  serial.on("portavailable", openPort);
  serial.on("requesterror", portError);
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);

  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
}

function makePortButton() {
  portButton = createButton("choose port");
  portButton.position(10, 10);
  portButton.mousePressed(choosePort);
}

function choosePort() {
  serial.requestPort();
}

function openPort() {
  serial.open().then(() => {
    console.log("port open");
    portButton.hide();
  });
}

function portError(err) {
  alert("Serial port error: " + err);
}

function portConnect() {
  console.log("port connected");
  serial.getPorts();
}

function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}
