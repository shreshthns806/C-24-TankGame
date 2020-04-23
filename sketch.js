
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var ball1, canonball, ground, tanker, chain;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
   ground = new Ground(600,height,1200,20);
   tanker = new Tanker(125,height-100,60,10);
   ball1 = new Ball(500,50,30);
   ball2 = new Ball(600,100,30);
    chain = new ShootBall(ball1.body,{x:120,y:height-120});
}

function draw() {
    Engine.update(engine);
    background("white");
    
    ground.display();
    tanker.display();
    ball1.display();
    ball2.display();
// Remember to update the Matter Engine and set the background.
}



function mouseDragged(){
    Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
    // Call the shoot method for the cannon.
chain.shoot();
}