// *****varable declaration

//1.from GameBored
let gameboared=document.getElementById("gamebored");
let getcontext=gameboared.getContext("2d");
let UNIT=25;
let HEIGHT=gameboared.height;
let WIDTH=gameboared.width;
let foodx;
let foody;
//2.from Score
let scoretext=document.querySelector(".scoretext");
let score=0;
//3.retry from game try agine
let retry=document.querySelector(".retry");
//4.Game mode type
let Easy=document.getElementById("easy");
let Normal=document.getElementById("normal");
let Hard=document.getElementById("hard");
let btncon=document.querySelector(".btncon");
//5.moment of snake
let snake=[{x:UNIT*3,y:0},{x:UNIT*2,y:0},{x:UNIT,y:0},{x:0,y:0}]
let xvel=25;
let yvel=0;
let active=true;
let started=false;
//6.speed control
let mode=250;// normal mode defauld

//********addeventlisner*******

//1.key press control
window.addEventListener("keydown",keypress);
//2.retry Control
retry.addEventListener("click",gameTryAgine);
//3.game modes
Easy.addEventListener("click",easyMode);
Normal.addEventListener("click",normalMode); 
Hard.addEventListener("click",hardMode);


//*********Call the functions */
startGame();   // 1.start game
createfood();  // 2.create food random
displayfood(); // 3.display the food
drawsnake();  // 4.draw snake

//*************functions*/ 


//1.start game it will make blank bored
function startGame(){
    getcontext.fillStyle="black";
    getcontext.fillRect(0,0,HEIGHT,WIDTH);
    createfood();// create food 
}


//2. create the food
function createfood(){
foodx=Math.floor(Math.random()*HEIGHT/UNIT)*UNIT
foody=Math.floor(Math.random()*WIDTH/UNIT)*UNIT
}

//3.display the food

function displayfood(){
    getcontext.fillStyle="yellow";
    getcontext.fillRect(foodx,foody,25,25);
}

//4.draw the snake uising from snake array
function drawsnake(){
       getcontext.fillStyle="white"
       getcontext.strokeStyle="black"
    snake.forEach(function(snakepart){
      getcontext.fillRect(snakepart.x,snakepart.y,UNIT,UNIT);
      getcontext.strokeRect(snakepart.x,snakepart.y,UNIT,UNIT);
    })
}


//5.move snake 
function moveSnake(){
    // add array from snake moments 
    let head={x:snake[0].x+xvel,
              y:snake[0].y+yvel}
      snake.unshift(head)

      // when food take snake that time increse the snake
      if(snake[0].x==foodx && snake[0].y==foody)
      {
        // update the score food feed after
        score+=1;
        scoretext.textContent=score;
        createfood();// called create food
      }
      else
      snake.pop(); // move time pop up tile of snake 
}

// 6.clear game bored
function clearbored(){
    getcontext.fillStyle="black";
    getcontext.fillRect(0,0,HEIGHT,WIDTH);
}

//7. Time out function it will run the snake
function nexttick(){
    if(active){  //check run the snake active true
    setTimeout(function(){ // in site kept in timer function
        clearbored();
        displayfood();
        drawsnake();
        moveSnake();
        gameover();
        nexttick();
    },mode);
}

else{     //check run the snake active false
clearbored();
// make game over contents
getcontext.font="50px sherf"
getcontext.fillStyle="white";
getcontext.textAlign="center";
getcontext.fillText("Game Over!!!!",HEIGHT/2,WIDTH/2);
getcontext.fillText(`YOURSCORE:${scoretext.textContent}`,HEIGHT/2,180);
retry.classList.add("addbtn");
btncon.classList.add("addbtn");
}
}

//8.KeyPress control function ADD EVENTLISNER FUNCTION
function keypress(event){

    if(!started){ // start this game check
        started=true;
        nexttick();
    }

    // arrow key value 
    let LEFT=37;
    let UP=38;
    let RIGHT=39;
    let DOWN=40;

    //snake moment time opsite side cant go

    switch(true)
    {
        case (event.keyCode=== LEFT  && xvel!=UNIT):
            xvel=-UNIT;
            yvel=0;
            break;

            case (event.keyCode=== RIGHT && xvel!=-UNIT):
            xvel=UNIT;
            yvel=0;
            break;

            case (event.keyCode=== UP && yvel!=UNIT):
            xvel=0;
            yvel=-UNIT;
            break;

            case (event.keyCode=== DOWN && yvel!=-UNIT):
            xvel=0;
            yvel=UNIT;
            break;
    }
}


//9.game over check function
function gameover(){
  // contion of game over 
    switch(true){
    case(snake[0].x<0):
    case(snake[0].x>=WIDTH):
    case(snake[0].y<0):
    case(snake[0].y>=HEIGHT):
    active=false; // chenge the value false
    break;
    }
}

//10.try Agine game functiom
    function gameTryAgine() {
        // Reset game state
        score = 0;
        xvel = UNIT;
        yvel = 0;
        
        // Reset snake to its starting position
        snake = [
            { x: UNIT * 3, y: 0 },
            { x: UNIT * 2, y: 0 },
            { x: UNIT, y: 0 },
            { x: 0, y: 0 }
        ];
        
        active = true;  // Game is active again
        started = false;  // Reset the start state so it waits for keypress
        
        // Hide the retry button
        retry.classList.remove("addbtn");
        btncon.classList.remove("addbtn");
        
        // Reset score display
        scoretext.textContent = score;
        
        // Clear the canvas and restart the game
        clearbored();
        
        startGame();  // Reset the game state
        createfood();
        displayfood();
        drawsnake();
    }

    //11. easy mode ADD EVENTLISNER FUNCTION
function easyMode(){
mode=500; // reduse the snake speed
gameTryAgine();
getcontext.font="25px shrif"
getcontext.fillText("Easy mode",420,30);
btncon.classList.remove("addbtn")
}

// 12.normal mode ADD EVENTLISNER FUNCTION
function normalMode(){
    mode=250;// normal the snake speed
    gameTryAgine();
   getcontext.font="25px shrif"
   getcontext.fillText("Normal mode",420,30);
   btncon.classList.remove("addbtn");
}


//13.hard mode ADD EVENTLISNER FUNCTION
function hardMode(){
    mode=100; // speed the snake 
    gameTryAgine();
   getcontext.font="25px shrif"
   getcontext.fillText("Hard mode",420,30);
   btncon.classList.remove("addbtn");
}



