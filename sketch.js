var wall, thickness;
var bullet,bulletSpeed, bulletWeight;

function setup() {
  createCanvas(1600, 400);

  thickness = random(22, 83);
  bulletSpeed = random(223,321);
  bulletWeight = random(30, 52);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = bulletSpeed;
  bullet.shapeColor = color(255, 255, 255);

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(255);
}

function draw() {
  background("black");

  if (hasCollided(bullet,wall )){
    bullet.velocityX = 0;
    var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor= color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor= color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;
   if(bulletRightEdge>= wallLeftEdge){
      return true;
   }
  else {
      return false;
  }
}