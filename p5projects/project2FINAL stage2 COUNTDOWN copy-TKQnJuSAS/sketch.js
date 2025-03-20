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

// port chooser button:
let portButton;
let hours = 0;
let minutes = 0;
let seconds = 10;
let bgImage;
let alertText = 'Time to water the plants!!!'

// flag to control the countdown
let countdownStarted = false; // Countdown should only start when button is pressed
let showAlert = false; // Flag to control displaying alert text

function preload() {
  // Loading the background image
  bgImage = loadImage("plant.png"); 
}

function setup() {
  createCanvas(400, 600);
  // check to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  } else {
    // set up serial communication
    setupSerial();
  }
  textSize(48);
  textAlign(CENTER, BOTTOM);
  setInterval(updateTime, 1000); // Updating the time every second
}

function draw() {
  background(bgImage); // Displaying the background image

  // Drawing a rectangle behind the counter or alert text
  fill(0, 150); // Black with transparency for contrast
  rect(0, height - 80, width, 80);

  fill(255); 
  if (showAlert) {
    // Display the alert text when countdown reaches 00:00:00
    text(alertText, width / 2, height - 20);
  } else {
    // Display the countdown timer if alert is not shown
    let timeString = nf(hours, 2) + ":" + nf(minutes, 2) + ":" + nf(seconds, 2);
    text(timeString, width / 2, height - 20);
  }
}

// Part 3
function updateTime() {
  // Updating the time if the countdown has started
  if (countdownStarted && !showAlert) {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      seconds = 59;
      minutes--;
    } else if (hours > 0) {
      minutes = 59;
      seconds = 59;
      hours--;
    } else {
      // When countdown reaches 00:00:00
      countdownStarted = false;
      showAlert = true; // Set flag to show alert text
      serial.write("1"); // Send signal to Arduino
    }
  }
}

/*------------------------------------*\
  Functions for Serial Communication
\*------------------------------------*/

function serialEvent() {
  // Part 1
  // code to handle the incoming data:
  let inData = serial.readString().trim();
  
  // verify that you are getting data:
  console.log("Received from Arduino:", inData);

  // Part 2
  // if there is data AND that data equals a "1" string
  if (inData && inData === "1") {
    // Part 3
    // then call the function to start the countdown since the button has been pressed
    startCountdown();
  }
}

// Function to start the countdown
function startCountdown() {
  // Reset timer values for a new countdown
  hours = 0;
  minutes = 0;
  seconds = 10;
  countdownStarted = true; // Set countdown flag to true
  showAlert = false; // Reset the alert display flag
  console.log("Countdown started"); // Debugging log
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

