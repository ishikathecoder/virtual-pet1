
var dog, happyDog, database, foodS, foodStock , position;
var backgroundImg, dogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");  
  //backgroundImg = loadImage("bg.jpg");
  
}


function setup(){
    createCanvas(900,500);
    database= firebase.database();
    dog = createSprite(450,300,50,50);
    dog.addImage("dog",dogImg);
    dog.scale=0.5  ;
     foodStock =  database.ref('food');
    foodStock.on("value",readStock)
}

function draw(){
    background("turquoise");
    
   
    if(keyWentDown("space")){
        
       WriteStock(foodS)
       dog.addImage("happyDog",happyDog);   
    }
    

   
    
    drawSprites();
    textSize(25);
    fill("black");
    text("food remaining:"+ foodS,170,80);
    text("press space to feed the dog!" ,170 , 120 )
    
}

function WriteStock(petFOOD){
    if(petFOOD<=0){
        petFOOD=0
    }
    else{
        petFOOD=petFOOD-1;
    }
    database.ref('/').update({
        food:petFOOD
    })
}
function readStock(data){
    foodS = data.val();
    
}
