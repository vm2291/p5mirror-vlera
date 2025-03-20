/*
Modified from ml5 next-gen example
https://editor.p5js.org/ml5/sketches/c8sl_hGmN
"MoveNet is an ultra fast and accurate model that detects 17 keypoints of a body"
*/

let video;

// STEP 1 declare variable for bodyPose Model
let bodyPose;


// STEP 3 create array to hold bodyPose data
let poses = [];

function preload() {
  // STEP 1 - Load the bodyPose model.
  bodyPose = ml5.bodyPose("MoveNet", { flipped: true });
}

function setup() {
  createCanvas(640, 480);

  // Create video element, flip it, and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();

  // STEP 2 - Start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses)
  
}


// STEP 3 - Callback function for when bodyPose outputs data
function gotPoses(results) {
  // save the output to poses [] variable
  poses = results;
}


// STEP 4 - Function to print pose info in Console
function mousePressed() {
 console.log(poses)
  
}

function draw() {

  // Draw the webcam video
  image(video, 0, 0, width, height);

  // STEP 5 - If there are poses, work with specific points
  if (poses.length > 0) {
    // Just get the first human
    let pose = poses[0]
    
    // Add circle to  keypoint
    let nose = pose.nose;
    circle(pose.nose.x, pose.nose.y, 50)
  }
  
  
  
  
}
