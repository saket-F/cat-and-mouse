var bg,cat1,cat2,cat3,mouse1,mouse2,mouse3;
var CAT,BG,MOUSE;
function preload()
 {
  bg = loadImage("images/garden.png");
  cat1 = loadAnimation("images/cat1.png");
  cat2 = loadAnimation("images/cat2.png","images/cat3.png");
 cat3 = loadAnimation("images/cat4.png");
 mouse1 = loadAnimation("images/mouse1.png");
 mouse2 = loadAnimation("images/mouse2.png");
 mouse3 = loadAnimation("images/mouse3.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
 BG = createSprite(500,400);
 BG.addImage(bg);
    CAT = createSprite(800,700);
    CAT.addAnimation("Cat standing",cat1);
    CAT.scale=0.1;

    MOUSE = createSprite(200,700);
    MOUSE.addAnimation("mouse standing",mouse1);
    MOUSE.scale=0.1;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (CAT.isTouching(MOUSE))
    {
      CAT.velocityX=0;
      CAT.addAnimation("Cat stop",cat3);
  CAT.changeAnimation("Cat stop",cat3);
  MOUSE.addAnimation("laughing mouse",mouse3);
  MOUSE.changeAnimation("laughing mouse",mouse3);
    }
    drawSprites();
}


function keyPressed()
{
if ( keyCode === LEFT_ARROW)
{
  CAT.velocityX=-2;
  CAT.addAnimation("Cat running",cat2);
  CAT.changeAnimation("Cat running",cat2);
  MOUSE.addAnimation("Scared mouse",mouse2);
  MOUSE.changeAnimation("Scared mouse",mouse2);
}


}
