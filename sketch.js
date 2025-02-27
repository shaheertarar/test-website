let space = "csm"
let shapeX = 0
let bubbleSize = 50
let fish;
let timer = 0;
let inc = 0;

function preload(){
  fish = loadImage("fish.png")
}

// this runs once on page load
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// this runs 60 times a second
function draw() {
  let sec = second()

  background(170, 200, 230);

  image(fish, sec * 10, 0, 500, timer)

  textSize(20)
  text(space, 10, 20)

  rect(shapeX, 100, 100, 100)
  shapeX = shapeX + 5

  noFill()
  circle(windowWidth/2, windowHeight/2, bubbleSize)
  bubbleSize = bubbleSize + 2
  timer = timer + inc
}

function mouseClicked(){
  shapeX = 0
  bubbleSize = 0
}