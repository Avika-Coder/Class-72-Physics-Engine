const Engine = Matter.Engine;
const Composite = Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, brick1, brick2, brick3, brick4;
function setup() {
    canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    var plank_options = {
        restitution: 0
    }

    ground = new Ground(300, 590, 600, 60);
    brick1 = new Brick(440, 250, 200, 20);
    brick2 = new Brick(440, 150, 60, 60);
    brick3 = new Brick(440, 200, 200, 20);
    brick4 = new Brick(440, 200, 200, 20);
    ball1 = new Ball(150, 350, 30);
    ball2 = new Ball(150, 250, 30);
    angleMode(RADIANS);
}

function draw() {
    background("#C0FEFC");
    Engine.update(engine);
    rectMode(CENTER);
    stroke("black");
    strokeWeight(1);
    brick2.display();
    stroke("black");
    ball1.display();
    ball2.display();
    stroke("black");
    strokeWeight(2);
    ground.display();
    stroke("black");
    brick1.display();
    brick3.display(); 
    brick4.display();
}

