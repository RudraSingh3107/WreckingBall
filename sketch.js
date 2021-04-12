const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//var ball;
var engine ;
var world ;
var object1 ;
var ball1 ;
var ground;
var box2;
var box1;
var box3, box4, box5, box6, box8, box7;
var box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24;
var rope;

var ball2;

function setup() {
  createCanvas(1200,800);
  //background(1);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,800,1200,50);
  box1 = new Box(900,100,70,70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);

  box9 = new Box(830,100,70,70);
  box10 = new Box(830, 100, 70, 70);
  box11 = new Box(830, 100, 70, 70);
  box12 = new Box(830, 100, 70, 70);
  box13 = new Box(830, 100, 70, 70);
  box14 = new Box(830, 100, 70, 70);
  box15 = new Box(830, 100, 70, 70);
  box16 = new Box(830, 100, 70, 70);

  box17 = new Box(970,100,70,70);
  box18 = new Box(970, 100, 70, 70);
  box19 = new Box(970, 100, 70, 70);
  box20 = new Box(970, 100, 70, 70);
  box21 = new Box(970, 100, 70, 70);
  box22 = new Box(970, 100, 70, 70);
  box23 = new Box(970, 100, 70, 70);
  box24 = new Box(970, 100, 70, 70);

  ball2 = new Ball(300,100,90,90);
  rope = new Rope(ball2.body, {x: 400, y: 50});
}

function draw() {
  background("white"); 
  Engine.update(engine);

  ground.display();
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

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  ball2.display();
  rope.display();

  //console.log(box2.body.angle);
}