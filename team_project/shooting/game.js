const canvas = document.querySelector("#canvas");
const startBtn = document.querySelector(".startBtn");
const description = document.querySelector(".description");
const ctx = canvas.getContext("2d");

let player = { "x": 25, "y": canvas.height / 2 - 25, "size": 50, "speed": 3 };
let keyDown = {};
let rockList = []; 
let isOver = false; 
let time = null; 
let rockImgList = [];
let bulletList = [];
let score = 0;
let check = 0;

let playerImg = new Image();  
playerImg.src = "./png/jet.png";

let backImg = new Image();
backImg.src = "./png/gameBackground.png";
let backX = 800;

backImg.addEventListener("load", () =>{
    ctx.drawImage(backImg,0,0,800,400);
})
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
function bulletInit(){
    let bullet = new Bullet();
    bulletList.push(bullet);
    bullet.init(player.x,player.y);
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
    backX--;
    ctx.drawImage(backImg, backX, 0, 800, 400);
    ctx.drawImage(backImg, backX - 800, 0, 800, 400);
    if (backX == 0) {
        backX = 800;
    }
    drawPlayer();
    drawScore();
    movePlayer();
    if(check==25){
        bulletInit();
        check=0;
    }
    check++;
    bulletList.forEach((b) => {b.update()});
    bulletList.forEach((bullet) => {
        rockList.forEach((rock) => {
            if(bullet.collision(rock.x + rock.radius / 2, rock.y + rock.radius / 2, 15)){
                rock.hp--;
                for(let i = 0 ; i < bulletList.length;i++){
                    if(bulletList[i]==bullet){
                        bulletList.splice(i,1);
                        break;
                    }
                }
            }
        })
    })
    
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
    bulletList.forEach((b) => {b.render(ctx);});
    rockList.forEach((b) => { b.render(ctx); b.render2(ctx); });
}
function drawScore() {
    ctx.beginPath();
    ctx.fillStyle = "white";
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
    description.style.display="flex";
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
    score=0;
    description.style.display="none";
    startBtn.innerHTML="Restart?";
    startBtn.style.visibility = "visible";
}