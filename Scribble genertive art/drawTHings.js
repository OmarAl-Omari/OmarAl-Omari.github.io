let themeColors = [
    "#F8EDE380",
    "#BDD2B680",
    "#A2B29F80",
    "#79877780",
    "#FFD4D480"
  ];
let WIDTH = 64;
let HEIGHT = 64;
function drawRandomEllipse() {
fill(random(255), random(50, 100), random(255), 50); // Reduce alpha for a subtle look
strokeWeight(random(0.5, 2)); // Reduce stroke weight
let colorIndex = floor(random([0, 1, 3, 4]));
stroke(themeColors[colorIndex]);

let ellipseX = random(width);
let ellipseY = random(height);
let ellipseWidth = random(width / WIDTH, width / HEIGHT);
let ellipseHeight = random(width / WIDTH, width / HEIGHT);

let ellipsePointsX = [ellipseX];
let ellipsePointsY = [ellipseY];

for (let angle = 0; angle <= 360; angle += random()) {
    let x = ellipseX + ellipseWidth / 2 * cos(radians(angle));
    let y = ellipseY + ellipseHeight / 2 * sin(radians(angle));
    ellipsePointsX.push(x);
    ellipsePointsY.push(y);
}

s.scribbleEllipse(ellipseX, ellipseY, ellipseWidth, ellipseHeight);
s.scribbleFilling(ellipsePointsX, ellipsePointsY, random(5, Math.sqrt(width / 2 * height / 2) / 100), random(360));
}

function drawRandomRectangle() {
strokeWeight(random(0.5, 2));
let colorIndex = floor(random([0, 1, 3, 4]));
stroke(themeColors[colorIndex]);
fill(themeColors[colorIndex]);

let rectX = random(width);
let rectY = random(height);
let rectWidth = random(width / WIDTH, width / HEIGHT);
let rectHeight = random(width / WIDTH, width / HEIGHT);

s.scribbleRect(rectX, rectY, rectWidth, rectHeight);

let rectPointsX = [rectX, rectX + rectWidth, rectX + rectWidth, rectX];
let rectPointsY = [rectY, rectY, rectY + rectHeight, rectY + rectHeight];
s.scribbleFilling(rectPointsX, rectPointsY, random(5, Math.sqrt(width / 2 * height / 2) / 100), random(360));
}

function drawRandomTriangle() {
strokeWeight(random(0.5, 2));
let colorIndex = floor(random([0, 1, 3, 4]));
stroke(themeColors[colorIndex]);
fill(themeColors[colorIndex]);

let isEquilateral = random() > 0.5;
let triangleSize = random(width / WIDTH, width / HEIGHT);

let triangleX1 = random(width - triangleSize);
let triangleY1 = random(height - triangleSize);

let triangleX2, triangleY2, triangleX3, triangleY3;

if (isEquilateral) {
    // Equilateral triangle (60°, 60°, 60°)
    triangleX2 = triangleX1 + triangleSize * cos(radians(60));
    triangleY2 = triangleY1 + triangleSize * sin(radians(60));

    triangleX3 = triangleX1 + triangleSize;
    triangleY3 = triangleY1;
} else {
    // Right-angled triangle (90°, 60°, 30°)
    triangleX2 = triangleX1 + triangleSize;
    triangleY2 = triangleY1;

    triangleX3 = triangleX1;
    triangleY3 = triangleY1 + triangleSize;
}

// Draw the triangle
s.scribbleLine(triangleX1, triangleY1, triangleX2, triangleY2);
s.scribbleLine(triangleX2, triangleY2, triangleX3, triangleY3);
s.scribbleLine(triangleX3, triangleY3, triangleX1, triangleY1);

// Apply the scribble filling
let trianglePointsX = [triangleX1, triangleX2, triangleX3, triangleX1];
let trianglePointsY = [triangleY1, triangleY2, triangleY3, triangleY1];
s.scribbleFilling(trianglePointsX, trianglePointsY, random(5, Math.sqrt(width / 2 * height / 2) / 100), random(360));
}