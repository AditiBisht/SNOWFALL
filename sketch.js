const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,bgImg;
var snow=[];
var snow2Img;

function preload(){
  bgImg = loadImage("snow2.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  if(frameCount % 50 === 0){
    for(var i = 0; i<200; i++){
      snow.push(new createSnow(random(0,800),random(0,800)))
    }
  }
}

function draw() {
  background(bgImg);
  Engine.update(engine);  
  for(var i=0;i<200;i++){
    snow[i].showDrop();
    snow[i].updateY();
  }
  drawSprites();
}