let max = 50;
let diam = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill("white");
  randomSeed(100);

  for(x = 0; x<=max ; x+=1){
    let xpos = random(0, windowWidth);
    let ypos = random(0, windowHeight);
    ellipse(xpos,ypos,diam,diam);
    }
  }
