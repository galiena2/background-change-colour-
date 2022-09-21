
var box
function setup() {
  createCanvas(400,400);
   box = createSprite(200,200,50,50)  
   background(30);
}


function draw() 
{
  if(keyIsDown(RIGHT_ARROW)) 
  {
    background("red"); 
  }
  if(keyIsDown(LEFT_ARROW)) 
  {
    background("yellow");
  }

drawSprites();   
}





