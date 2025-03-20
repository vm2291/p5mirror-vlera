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

let inData;

let x = 200;
let xspeed = 1;
let y = 200;
let yspeed = 1;

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
  background(220);

  // if there is incoming data
  if (inData) {
    // ball to move
    circle(x, y, 50);
    
    // if yspeed is positive, y gets bigger and ball moves down
    // if yspeed is negative, y gets smaller and ball moves up
    // yspeed value determined by incoming sensor data
    y += yspeed;
    x += xspeed
  }
}

/*------------------------------------*\
  Functions for Serial Communication
\*------------------------------------*/

// If all goes well from the functions below,
// read any incoming data as a "string"
// (assumes a newline at the end of it)

function serialEvent() {
  // all the code to handle the incoming data:

  // STEP 1
  // read string and convert to a number:
  inData = Number(serial.readString());

  // STEP 2
  // verify that you are getting data:
  // console.log("sensor value: " + inData);

  // if there is incoming data
  if (inData) {
    // check it and making something happen
    
    // STEP 3
    // move a ball
    // up and down
    if (inData == 1) {
      console.log(inData + "move the ball down")
      yspeed = 1; // make yspeed positive
    } else if (inData==2){
       console.log(inData + "move the ball up")
       yspeed = -1; // make yspeed negative
    }
    
    
    // STEP 4
    // left and right
    else if (inData==3){
       console.log(inData + "move the ball right")
       xspeed = 1; // make xspeed negative
    }
    else if (inData==4){
       console.log(inData + "move the ball left")
       xspeed = -1; // make xspeed negative
    }
    
    // STEP 5
    // maybe point Arduino away for directions to make sense!
    // All together now!
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
