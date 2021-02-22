//to assign the var names
var bg, bgImage;
var balon1, balon1Image;
var balon2, balon2Image;
var balon3, balon3Image;
var database;
var balonPosition;

function preload(){
  //to load images 
bgImage = loadImage("bg.jpg");
balon1Image = loadImage("balon1.png");
balon2Image = loadImage("balon2.png");
balon3Image = loadImage("balon3.png");
}

function setup() {
  createCanvas(1300,630);
  //to connect database
  database = firebase.database;
  
  //to create backgroundImage
  bg = createSprite(400, 300,10, 10);
  bg.addImage(bgImage);
  bg.scale = 1.4;
// to create hot air balloon
  balon1 = createSprite(400, 450, 10, 10);
  balon1.addImage(balon1Image);
  balon1.scale = 0.7;




}

function draw(){
  background("tan"); 
  //to move the hot air ballon using arrow keys
  if(keyDown(LEFT_ARROW)){
balon1.x = balon1.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balon1.x = balon1.x+10;
  }
  else if(keyDown(UP_ARROW)){
    //updateHeight(0, -10);
    balon1.y = balon1.y-10;
    balon1.addImage(balon2Image);
    balon1.scale = balon1.scale -0.01;
  }
  else if(keyDown(DOWN_ARROW)){
    balon1.y = balon1.y+10;
    balon1.addImage(balon3Image);
    balon1.scale = balon1.scale+0.01;
  }

  

  

  
  drawSprites();
//to text
  textSize(35);
  stroke("darkblue");
  strokeWeight(2);
fill("red");
text("***Use arrow keys to move the Hot Air Balloon***", 90, 70);
}
//to update the x and y position of the balloon in the database
function updateHeight(){
  database.ref(balloon/height).set({
    'x':height. x + x,
    'y':height.y + y
  }

  )
}
//to read x and y
function readHeight(data){
height = data.val();
balon1.x = height.x;
balon1.y = height.y;
}
//to show error in the console.log
function showError(){
  console.log("Error in writing to th database");
}