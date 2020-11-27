
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin;
var bin,binImg;

function preload()
{
	binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

//   bin = createSprite(690,550,5,5);
//   bin.addImage(binImg)
//   bin.scale = 0.6;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,645,800,10);
	paper = new Paper(100,640,15);
	dustbin = new Dustbin(690,635,150,10);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("BLACK");
  
   keyPressed();

 ground.display();
 dustbin.display();
 paper.display();

 drawSprites();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:0.5,y:-2});
	}
}

