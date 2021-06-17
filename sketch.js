let ground;
let ball
let ball_option={
    isStatic:false,
	restitution:0.3,
	friction:0,
	dencity:1.2
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	btm1 = createImg( "up.png");
	btm1.position(220,30)
	btm1.size( 50,50)
	btm1.mouseClicked(vForce)
  

	
  groundObj = new ground(width/2,670,width,20);
  leftSide = new ground(1100,600,20,120);
  rightSide = new Ground(1200,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  drawSprites();
 ground.show();
 leftSide.show();
 rightSide.show();

}

function vForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})

}

