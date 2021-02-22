const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Creating the polygon
var polygon;

//Variable slingshot
var slingshot;

//Creating the blocks
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;

//Ground variable
var ground, platform;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  //Creating the Ground
  ground = new Ground(400,height,800,20);

  //Placing the polygon
  // polygon = Bodies.circle(50, 200, 20);
  polygon = new Polygon(50, 200, 50);
  World.add(world, polygon);

  //Placing the blocks
  
  //Layer 1
  block1 = new Block(350, 300, 50, 50);
  block2 = new Block(400, 300, 50, 50);
  block3 = new Block(450, 300, 50, 50);
  block4 = new Block(500, 300, 50, 50);
  block5 = new Block(550, 300, 50, 50);
  block6 = new Block(600, 300, 50, 50);
  block7 = new Block(650, 300, 50, 50);
  block8 = new Block(700, 300, 50, 50);

  //Layer 2
  block9 = new Block(425, 250, 50, 50);
  block10 = new Block(475, 250, 50, 50);
  block11 = new Block(525, 250, 50, 50);
  block12 = new Block(575, 250, 50, 50);

  //Layer 3
  block13 = new Block(500, 200, 50, 50);
  block14 = new Block(550, 200, 50, 50);

  //Top piece
  block15 = new Block(525, 150, 50, 50);

  //Slingshot
  slingshot = new SlingShot(this.polygon, {x:100, y:200});
}


function draw() {
  background(0);  
  Engine.update(engine);

  //Displaying bodies
  ground.display();

  polygon.display();
  slingshot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  drawSprites();
}

//Function MouseDragged
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

//Function MouseReleased
function mouseReleased(){
  slingshot.fly();
}