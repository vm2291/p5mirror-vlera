/*
Assumptions about counting
- Starting point, Start counting at 1
- Stopping point
- Changing by 1
- Direction of counting (usually that change is increasing
- Tempo / speed of counting
*/

function setup() {
  createCanvas(400, 400);
  background(220);

  // Parts of a for loop
  // 1. Starting point
  // 2. Stopping point
  // 3. Amount of change
  
  for (let counter = 0; counter < 10; counter += 1) {
    // console.log(counter)
    let x = random(0, width);
    let y= ran
    console.log(x)
    
    // draw a square
    square(x, y, 100)
  }
  
  
  
  
}

function draw() {
  
}
