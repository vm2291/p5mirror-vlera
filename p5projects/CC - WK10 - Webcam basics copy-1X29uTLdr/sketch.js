let cam;

function setup() {
  createCanvas(320, 240);
  
  // Connect to camera 
  cam = createCapture(VIDEO, {flipped: true})
  
  // Hide element from displaying below canvas
  cam.hide()
}

function draw() {
  background(220);

  // Draw webcam on canvas 
  image(cam, 0, 0, 320, 240)
 

}


