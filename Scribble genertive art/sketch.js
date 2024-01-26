let s;
let numCircles = 100;
let numRectangles = 100;
let numTriangles = 100;

// Define theme colors with reduced intensity and alpha

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Scribble();
  background("#A2B29F"); // Use a light background color
  s.bowing = random(0, 1);
  s.roughness = random(0.5, 1.5);
  s.maxOffset = random(1, 5);
  s.numEllipseSteps = floor(random(50, 150));

  for (let i = 0; i < numCircles; i++) {
    drawRandomEllipse();
  }

  for (let i = 0; i < numRectangles; i++) {
    drawRandomRectangle();
  }

  for (let i = 0; i < numTriangles; i++) {
    drawRandomTriangle();
  }
}



