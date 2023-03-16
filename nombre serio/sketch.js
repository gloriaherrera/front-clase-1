function setup() {
  createCanvas(windowWidth,windowHeight).position(0,0).style("z-index",-1)
  createA("https://github.com/gloriaherrera","MI CUENTA","_blank").id("noautorizo");
}

function draw() {
  textSize(50)
text("🐀", mouseX, mouseY);
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}