const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var slingshot;
var score=0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    stand1=new Ground(790, 300, 250, 10);
    box1= new Box(700, 275, 30, 40);
    box2= new Box(730, 275, 30, 40);
    box3= new Box(760, 275, 30, 40);
    box4= new Box(790, 275, 30, 40);
    box5= new Box(820, 275, 30, 40);
    box6= new Box(850, 275, 30, 40);
    box7= new Box(880, 275, 30, 40);

    box8= new Box(730, 235, 30, 40);
    box9= new Box(760, 235, 30, 40);
    box10= new Box(790, 235, 30, 40);
    box11= new Box(820, 235, 30, 40);
    box12= new Box(850, 235, 30, 40);

    box13= new Box(760, 195, 30, 40);
    box14= new Box(790, 195, 30, 40);
    box15= new Box(820, 195, 30, 40);
    box16= new Box(790, 155, 30, 40);
    
    bird = new Bird(200,50);

    slingshot = new Slingshot(bird.body, {x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    text(mouseX+','+mouseY, 10, 15)
    text("Score:" + score,1000, 15);
    strokeWeight(4);
    
    ground.display();
    stand1.display();
    bird.display();
    platform.display();
    
    slingshot.display();    
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

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();

}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    slingshot.fly();
}
