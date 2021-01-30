var canvas;
var music;
var rRect;
var bRect;
var yRect;
var oRect;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    //create 4 different surfaces
rRect = createSprite(400,590,800,50);
rRect.shapeColor = "red";

bRect = createSprite(400,10,800,50);
bRect.shapeColor = "blue";

yRect = createSprite(10,180,50,1000);
yRect.shapeColor = "yellow";

oRect = createSprite(790,0,50,2000);
oRect.shapeColor = "orange";

createEdgeSprites();

    //create box sprite and give velocity
box = createSprite(400,300,50,50);
box.shapeColor = "white";
box.velocityY  = 3;
box.velocityX = 4;




}

function draw() {
    background("grey");
    //create edgeSprite
    createEdgeSprites();


    //add condition to check if box touching surface and make it box
if(rRect.isTouching(box) && box.isTouching(rRect)){
    box.shapeColor = "red";
    box.bounceOff(rRect)
}

if(bRect.isTouching(box) && box.isTouching(bRect)){
    box.shapeColor = "blue";
    box.bounceOff(bRect)
}

if(yRect.isTouching(box) && box.isTouching(yRect)){
    box.shapeColor = "yellow";
    box.bounceOff(yRect)
}

if(oRect.isTouching(box) && box.isTouching(oRect)){
    box.shapeColor = "orange";
    box.bounceOff(oRect)
}













    drawSprites();
}
