var fixedRect, movingRect;

function setup() {
  createCanvas(500,500);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect = createSprite(400, 400,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("purple");   
  
 // bounceoff(movingRect,fixedRect);
  
  drawSprites();
}
