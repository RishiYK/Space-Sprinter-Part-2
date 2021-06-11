var PLAY=1;
var END=0;
var SERVE;

gameState=SERVE;


var start;
//var edges;

var bg,astronaut,astronautImg,comet1,cometImg1, comet2,cometImg2,potion,potionImg,mainRocket,mainRocketImg;
var potionS,gameS;

var death=0;
var tresureCollection=0;


function preload(){
  bgImg=loadImage("Background.gif");
  astronautImg=loadImage("Astronaut.png");
  cometImg1=loadImage("01.png");
  cometImg2=loadImage("02.png");
  potionImg=loadImage("Potion.png");
  mainRocketImg=loadImage("MainRocket.png");
  potionS=loadSound("Potion.wav");
  gameS=loadSound("Gameover.wav");
  start=loadImage("Start.gif")
 

}

function setup() {
  createCanvas(1750,850);

  bg=createSprite(width/2-100,height/2,width/2,height/2);
  bg.addImage(bgImg)
 

  astronaut=createSprite(400, 300, 50, 50);
  astronaut.addImage(astronautImg);
  astronaut.scale=0.08;

  //edges= createEdgeSprites();
  
  
}

function draw() {

  if(gameState===SERVE){
   start.visible=true;
   if(keyDown("S")){
     gameState=PLAY;
     start.visible=false;
   }
  }
 if(gameState===PLAY){

  //bg.velocityX=-5

  if(bg.x<0){
    bg.x=bg.width/2;
  }


if(keyDown("space")){
  astronaut.velocityY=-5;
}

astronaut.velocityY= astronaut.velocityY+0.8;






 }  
  
  
  drawSprites();
}