// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scribble = new Scribble();
let colors = ["red", "orange", "yellow", "lime", "blue", "fuchsia", "black" ];
let strokeThickness = 4;
let numberOfImages = 100;
let pointingTriangles = ["up","down","left","right"];
let cnv;
function setup() {
  cnv = createCanvas(64, 64);
  rectMode(CENTER);
  scribble.bowing = 0;
  scribble.roughness = 1.3;
  scribble.maxOffset = 2;
}

function draw() {

  
  frameRate(1);

 
  background(255);
  noFill();
  strokeWeight(strokeThickness);
  let r = random(8, 24);
  let x = random(r, width-r);
  let y = random(r, height-r);
  stroke(random(100),random(100),random(100));
  translate(x,y);
  if(frameCount-1 < numberOfImages){
    // scribble.buildEllipse( 0, 0, r, r, random(0,2), 0 ); 
    circle(0,0,r*2);
    save(cnv,"circle" + nf(frameCount, 4) + ".png");
  }
  else if(frameCount<=numberOfImages*2){
    rotate(random(-0.1, 0.1));
    // scribble.scribbleRect(0,0,r*2,r*2);
    rect(0,0,r*2);
    save(cnv,"square" + nf(frameCount-numberOfImages, 4) + ".png");
  }
  else if(frameCount<=numberOfImages*3){
    let chosenDirection = random(pointingTriangles);
    rotate(random(-0.1, 0.1));
    // if (chosenDirection === "up") {
    //   scribble.scribbleLine(0, -r, r, r);
    //   scribble.scribbleLine(r, r, -r, r);
    //   scribble.scribbleLine(-r, r, 0, -r);
    //   //triangle(0, -r, r, r, -r, r);
    // } 
    // else if (chosenDirection === "down") {
    //   scribble.scribbleLine(-r, -r, r, -r);
    //   scribble.scribbleLine(r, -r, 0, r);
    //   scribble.scribbleLine(0, r, -r, -r);
    //   // triangle(-r, -r, r, -r, 0, r);
    // } 
    // else if (chosenDirection === "right") {
    //   scribble.scribbleLine(0, -r, r, 0);
    //   scribble.scribbleLine(r, 0, 0, r);
    //   scribble.scribbleLine(0, r, 0, -r);
    //   // triangle(0, -r, r, 0, 0, r);
    // } 
    // else if (chosenDirection === "left") {
    //   scribble.scribbleLine(0, -r, -r, 0);
    //   scribble.scribbleLine(-r, 0, 0, r);
    //   scribble.scribbleLine(0,r , 0, -r);
    //   // triangle(0, -r, -r, 0, 0, r);
    // }
    triangle(0, -r, r, r, -r, r);
    save(cnv,"triangle" + nf(frameCount-numberOfImages*2, 4) + ".png");
  }
  




  if(frameCount === numberOfImages*3){
    noLoop();
  }
}

