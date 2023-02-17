const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");

const gravity = 0.1;
let checkKey = false;
let player = {"x":10,"y":0,"width":20, "height":20};
let velocity = 0.1;
let test = 0;
let time = null;
let hurdleList = [];

window.addEventListener("keydown", (e) => {
    if(e.key=="ArrowUp"&&!checkKey){
        checkKey=true;
        velocity=-4;
    }
})

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer();
    if(test==100){
        let hurdle = new Hurdle;
        hurdleList.push(hurdle);
        hurdle.init();
        test=0;
    }
    hurdleList.forEach((h) => { 
        if(h.collision(player.x,player.y,10)){
            gameOver();
            clearInterval(time);
        }
    });
    hurdleList.forEach((h) => { h.update(); });
    hurdleList.forEach((h) => { h.render(ctx);});

    test++;
}

function drawPlayer() {
    ctx.beginPath();
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.closePath();
}

function updatePlayer(){
    drawPlayer();
    player.y+=velocity;
    if(player.y + player.height+velocity>=canvas.height){
        velocity=0;
        checkKey=false;
    }else{
        velocity+=gravity;
    }
}

button.addEventListener("click",()=>{
    startGame();
    canvas.style.display="flex";
    button.style.display="none";
})
function startGame(){
    time=window.setInterval(draw,10);
}
function gameOver(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.font = "bold 40px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    ctx.closePath();
}