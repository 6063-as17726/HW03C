let max = 50;
let diam = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill("white");
  strokeWeight(1);
  stroke(255);
  randomSeed(100);

  for(x = 0; x<=max ; x+=2){
    let xpos = random(0, windowWidth);
    let ypos = random(0, windowHeight);
    let xpos1 = random(0, windowWidth);
    let ypos1 = random(0, windowHeight);
    ellipse(xpos,ypos,diam,diam);
    ellipse (xpos1,ypos1,diam,diam);
    line(xpos,ypos,xpos1,ypos1);
    }
  }
