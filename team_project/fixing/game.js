const canvas = document.querySelector("#canvas");
const startBtn = document.querySelector(".startBtn");
const ctx = canvas.getContext("2d");

let player = { "x": 25, "y": canvas.height / 2 - 25, "size": 50, "speed": 3 };
let keyDown = {};
let rockList = []; 
let isOver = false; 
let time = null; 
let rockImgList = [];
let bulletList = [];
let score = 0;

let playerImg = new Image();  
playerImg.src = "./png/jet.png";


window.addEventListener("keydown", (e) => {
    keyDown[e.key] = true;
})
window.addEventListener("keyup", (e) => {
    keyDown[e.key] = false;
})

startBtn.addEventListener("click", startGame);

function rockInit() {
    for(let i = 0 ; i < 4 ; i++){
        rockImgList[i]=new Image();
        rockImgList[i].src = `./png/rock${i+1}.png`;
    }
    rockList = [];
    for (let i = 0; i < 10; i++) {
        let b = new Rock();
        rockList.push(b);
    }
    rockList.forEach((b) => { b.init() });
}

function movePlayer() {
    if (keyDown["ArrowUp"]) {
        player.y -= player.speed;
    } else {
        player.y += player.speed*2;
    }
    if (player.y <= 0) player.y = 0;
    if (player.y >= canvas.height - player.size) player.y = canvas.height - player.size;
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawScore();
    movePlayer();
    rockList.forEach((b) => { b.update() });
    rockList.forEach((b) => {
    if (b.collision(player.x + player.size / 2, player.y + player.size / 2, 25)) {
        gameOver();
        clearInterval(time);
        return false;
        }
    });
    if (isOver) {
        return;
    }
    rockList.forEach((b) => { b.render(ctx); b.render2(ctx); });
}
function drawScore() {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.textAlign = "end";
    ctx.font = "bold 30px sans-serif";
    ctx.fillText(score,canvas.width-5,20);
    ctx.closePath();
}

function drawPlayer() {
    ctx.beginPath();
    ctx.drawImage(playerImg, player.x, player.y, 100, player.size);
    ctx.closePath();
}

function startGame() {
    isOver = false;
    startBtn.style.visibility = "hidden";
    canvas.style.display="flex";
    rockInit();
    time = window.setInterval(draw, 10);
}

function gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.font = "bold 40px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.font = "bold 30px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`Score : ${score}`, canvas.width / 2, canvas.height / 2+50);
    ctx.closePath();
    isOver = true;
    startBtn.innerHTML="Restart?";
    startBtn.style.visibility = "visible";
}

