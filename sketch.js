//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tanker;
var canonball;
var ground;

var backgrpundImg;

function preload()
{
    backgroundImg = loadImage("assets/back11.PNG");
}

function setup() 
{
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    tanker = new Tanker(100, 200, 100, 100);
    canonball = new CanonBall(600, 200, 100, 100);
    ground = new Ground(600,1200,10,10);
}

function draw() {

// Remember to update the Matter Engine and set the background.
    background(backgroundImg);
    Engine.update(engine);

    tanker.display();
    canonball.display();
    ground.display();

}


function keyReleased() 
{
    // Call the shoot method for the cannon.
}