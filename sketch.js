
var monkey , monkey_running;
var banana,bananaImage; 
var obstacle, obstacleImage;
var obstacleGroup,bananaGroup;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=4;
  ground.x=ground.width/2;
  
  
bananaGroup=createGroup();
obstacleGroup=createGroup();
  survivalTime=0
}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 120,50)
  
  
  if (ground.x < 400){
      ground.x = ground.width/2;
    }
  ground.velocityX = -4
  monkey.collide(ground);

  if(keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-12
  }
  
monkey.velocityY=monkey.velocityY+0.8
  
  bananas();
  obstacles();
  drawSprites();
  
}


function bananas(){
  if(frameCount % 80===0){
  var banana=createSprite(300,200,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y=Math.round(random(120,200));
  banana.lifetime=200;
  banana.velocityX=-4;
  bananaGroup.add(banana);
  }
  
  
}

function obstacles(){
if(frameCount % 200===0){
  var obstacle=createSprite(300,325,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.x=Math.round(random(120,200));
  obstacle.lifetime=200;
  obstacle.velocityX=-4;
  obstacleGroup.add(obstacle);
  }
  
}





