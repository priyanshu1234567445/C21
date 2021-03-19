
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(300,200,60,60);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(500,200,50,145);
  gameObject2.shapeColor = "blue";
  gameObject1.velocityX = 4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,gameObject2)){
    gameObject1.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 

BounceOff(gameObject1,gameObject2);
  drawSprites();
}


