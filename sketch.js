
var player, booster, portal, coin;
var platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9, platform10, floor, bgimage, bg;

function preload(){
   console.log("preload")
    bgimage = loadImage("images/background.png");
    coin = loadImage("images/coin.png");
    player = loadImage("images/player.png");
    portal = loadImage("images/portal.png");
    gameOver = loadImage("images/gameOver.png");
}


function setup() {
    gameState="start";
    console.log("start")
    createCanvas(600, 200);
    bg = createSprite(300,100,20,20);
    bg.addImage(bgimage)
    
    player = createSprite(400,200,30,30);
    platform1 = createSprite(200,200,20,20)
    platform2 = createSprite(200,200,20,20)
    platform3 = createSprite(200,200,20,20)
    platform4 = createSprite(200,200,20,20)
    platform5 = createSprite(200,200,20,20)
    platform6 = createSprite(200,200,20,20)
    platform7 = createSprite(200,200,20,20)
    platform8 = createSprite(200,200,20,20)
    platform9 = createSprite(200,200,20,20)
    platform10 = createSprite(200,200,20,20)

}
function draw(){

  console.log("bgimage")
    background(bgimage)

    

    if(gameState==="start"){
    text ('press space to start and use "W A S D" to move, Use "P" to pause',150,160)
    }
    if(keyDown("space")){
      gameState="play"
    }
    if(KeyDown("p")){
        gameState="start"
    }

    if(keyDown("a")){
        ball.velocityX=10;
    }

    if(keyDown("w")) {
        trex.velocityY = -10;
      }

      if(keyDown("s")){
        ball.velocityX= -10;
    }

    if(keyDown("d")) {
      trex.velocityY = 10;
    }

drawSprites()
}