/*
NYU IMA Creative Computing
Ellen Nickles

Serial read using p5.webserial, one value

Modified from sources: 
https://github.com/ITPNYU/physcomp/tree/main/Labs/P5SerialLabs/P5ReadSerial/readSerialWebSerial

https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-webserial-input-to-p5-js/
*/

// instance of p5.webserial library:
let serial = new p5.WebSerial();
// port chooser button:
let portButton;

// Part 3
// declare and initialize a variable for the background color:
let bgCol = 0;

// Part 4
let d = 50; 

function setup() {
  createCanvas(400, 400);
  // check to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  } else {
    // set up serial communication
    setupSerial();
  }
}

function draw() {
  // Part 3
  // use the variable for the background color instead of hardcoding a number:
  background(bgCol)
  
  circle(200, 200, d)
}

// Part 3
// write a function definition to generate a random background color:
function updateBackground() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  bgCol = color(r, g, b);
}

function growCircle(){
  d += 25;
}


/*------------------------------------*\
  Functions for Serial Communication
\*------------------------------------*/

// If all goes well from the functions below,
// read any incoming data as a "string"
// (assumes a newline at the end of it)

function serialEvent() {
  // Part 1
  // code to handle the incoming data:
  let inData = serial.readString();
  
  // verify that you are getting data:
  console.log(inData)

  // Part 2
  // if there is data AND that data equals a 1 string
  if (inData && inData == 1) {
    // Part 3
    // then call a function to update the background:
    updateBackground();
    growCircle();
  }

    
}


function setupSerial() {
  // check for any ports that are available:
  serial.getPorts();
  // if there's no port chosen, choose one:
  serial.on("noport", makePortButton);
  // open whatever port is available:
  serial.on("portavailable", openPort);
  // handle serial errors:
  serial.on("requesterror", portError);
  // handle any incoming serial data:
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);
  // add serial connect/disconnect listeners:
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
}

// if there's no port selected,
// make a port select button appear:
function makePortButton() {
  // create and position a port chooser button:
  portButton = createButton("choose port");
  portButton.position(10, 10);
  // give the port button a mousepressed handler:
  portButton.mousePressed(choosePort);
}

// make the port selector window appear:
function choosePort() {
  if (portButton) {
    portButton.show();
  }
  serial.requestPort();
}

// open the selected port, and make the port
// button invisible:
// open the selected port, and make the port
// button invisible:
function openPort() {
  // wait for the serial.open promise to return,
  // then call the initiateSerial function
  serial.open().then(initiateSerial);

  // once the port opens, let the user know:
  function initiateSerial() {
    console.log("port open");
  }
  // hide the port button once a port is chosen:
  if (portButton) {
    portButton.hide();
  }
}

// pop up an alert if there's a port error:
function portError(err) {
  alert("Serial port error: " + err);
}

// try to connect if a new serial port
// gets added (i.e. plugged in via USB):
function portConnect() {
  console.log("port connected");
  serial.getPorts();
}

// if a port is disconnected:
function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}

function closePort() {
  serial.close();
}
