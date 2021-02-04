
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(918,268,30);
	mango3=new mango(1214,264,30);
	mango4=new mango(974,150,30);
	mango5=new mango(1004,220,30);
	mango6=new mango(1160,157,30);
	mango7=new mango(1088,245,30);

	stoneObj=new Stone(242,460,25);

	launcherObject=new launcher(stoneObj.body,{x:241,y:460});

	treeObj=new tree(1050,610);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);
}

function draw() {

  background(230);

  //Add code for displaying text here!
  image(boy ,200,380,200,300);
  
  stoneObj.display();
  treeObj.display();
  launcherObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}
