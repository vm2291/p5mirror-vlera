/*
Modified from: 
https://editor.p5js.org/enickles/sketches/Zn5En0Sz_
*/

// instance of p5.webserial library:
let serial = new p5.WebSerial();
let portButton;
let hours = 0;
let minutes = 0;
let seconds = 10;
let bgImage;
let alertText = "Time to water the plant!!!";

// flag to control the countdown
let countdownStarted = false; // Countdown starts only when the button is pressed

function preload() {
  // Loading the background image
  bgImage = loadImage("plant.png");
}

function setup() {
  createCanvas(400, 600);
  // checking to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  } else {
    // setting up serial communication
    setupSerial();
  }
  textSize(48);
  textAlign(CENTER, BOTTOM);
  setInterval(updateTime, 1000); // Updating the time every second
}

function draw() {
  background(bgImage); // Displaying the background image

  // Drawing a rectangle behind the counter
  fill(0, 150); // Black with transparency for contrast
  rect(0, height - 80, width, 80);

  fill(255);
  let timeString = nf(hours, 2) + ":" + nf(minutes, 2) + ":" + nf(seconds, 2);
  text(timeString, width / 2, height - 20);
  if (hours === 0 && minutes === 0 && seconds === 0) {
    fill(121, 142, 128);
    textSize(32);
    //Displaying the alert text
    text(alertText, 200, 480);
  }
}

function updateTime() {
  // Updating the time if the countdown has started
  if (countdownStarted) {
    if (seconds != 0) {
      seconds--;
    } else if (seconds <= 0 && minutes != 0) {
      seconds = 59;
      minutes--;
    } else if (minutes <= 0 && hours != 0) {
      minutes = 59;
      hours--;
    } else {
      // When the countdown reaches 00:00:00, stop it
      countdownStarted = false;
      alert(); // Calling the alert function
    }
  }
}
function alert() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    serial.write("1");
  }
}

/*------------------------------------*\
  Functions for Serial Communication
\*------------------------------------*/

// If all goes well from the functions below,
// read any incoming data as a "string"
// (assumes a newline at the end of it)

function serialEvent() {
  // code to handle the incoming data:
  let inData = serial.readString().trim();

  // verify that we are getting data:
  console.log(inData);

  // if there is data AND that data equals a "1" string
  if (inData && inData === "1") {
    // then calling the function to start the countdown since the button has been pressed
    startCountdown();
  }
}

// Function to start the countdown
function startCountdown() {
  hours = 0;
  minutes = 0;
  seconds = 10;
  countdownStarted = true; // Setting countdown flag to true
}

/*------------------------------------*\
  Serial Communication Setup Functions
\*------------------------------------*/

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
