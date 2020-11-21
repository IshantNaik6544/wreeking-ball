
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;
	 
	ground = new  Ground(750,650,1500,10)
	bob = new Bob(100,500)
	slingshot = new Slingshot(bob.body,{x:500,y:200})
	
	box1 = new Box(700,580,70,70)
	box2 = new Box(770,580,70,70)
	box3 = new Box(840,580,70,70)
	box4 = new Box(910,580,70,70)
	box5 = new Box(700,510,70,70)
	box6 = new Box(770,510,70,70)
	box7 = new Box(840,510,70,70)
	box8 = new Box(910,510,70,70)
	box9 = new Box(700,440,70,70)
	box10 = new Box(770,440,70,70)
	box11= new Box(840,440,70,70)
	box12= new Box(910,440,70,70)

	box13= new Box(700,370,70,70)
	box14= new Box(770,370,70,70)
	box15= new Box(840,370,70,70)
	box16= new Box(910,370,70,70)
	
	
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground.display();
  bob.display();
  slingshot.display()
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
  
}

function mouseDragged(){
    
        Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
       
}




