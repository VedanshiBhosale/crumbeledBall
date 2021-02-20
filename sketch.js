
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var log1,log2,log3;
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	ground=new Ground(600,height,1200,20)
	ball= new Ball(130,200,20,55)
	log1=new Log(800,275,10,199)
	log2=new Log(1000,275,10,199)
	log3=new Log(900,370,199,10)
	Engine.run(engine);
  
}


function draw() {
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine)
ground.display();
ball.display();
log1.display();
log2.display();
log3.display();

 
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position ,{x:45,y:-45})
	}
	
}
