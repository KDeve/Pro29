
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var polygon1
var ground1
var slingshot1
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	polygon1=new Polygon(400,400,50)
    slingshot1=new SlingShot(polygon1.body,{x:100,y:350});
	ground1= new Ground(500,400,240,20)
	box1=new Box(500,200,30,40)
	box2=new Box(470,200,30,40)
	box3=new Box(440,200,30,40)
	box4=new Box(410,200,30,40)
	box5=new Box(530,200,30,40)
	box6=new Box(560,200,30,40)
	box7=new Box(590,200,30,40)
	box8=new Box(500,240,30,40)
	box9=new Box(470,240,30,40)
	box10=new Box(440,240,30,40)
	box11=new Box(560,240,30,40)
	box12=new Box(530,240,30,40)
	box13=new Box(530,280,30,40)
	box14=new Box(470,280,30,40)
	box15=new Box(500,280,30,40)
	box16=new Box(500,320,30,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  polygon1.display();
  slingshot1.display();
}

function mouseDragged() {

	Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY });
	
	}
	
	function mouseReleased() {
	
	slingshot1.fly();
	
	}

