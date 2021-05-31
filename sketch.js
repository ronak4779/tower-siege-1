const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box5;

function preload()
{
	
}

function setup() {
	createCanvas(1100,680);

    engine = Engine.create();
	world = engine.world;

    Engine.run(engine);

    ground=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255);
    ground.visible = false;
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


   

     box5=new Box(810,160,70,70);

}


function draw() {

  background(0);
  Engine.update(engine);
  box5.display();
  
 
  
 
}



