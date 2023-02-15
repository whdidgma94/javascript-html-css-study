const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");

let player = {"x": 25, "y": canvas.height -50, "size": 50, "speed": 3 }
let key = {"up" : false};
let rockList = [];

function init() {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyupHandler);
}
function rockInit() {
    rockList = [];
    for (let i = 0; i < 10; i++) {
        let b = new Rock();
        rockList.push(b);
    }
    rockList.forEach((b) => { b.init() });
}
function keyDownHandler(e) {
    if (e.key == "ArrowUp") {
        key.up = true;
    } 
}
function keyupHandler(e) {
    if (e.key == "ArrowUp") {
        key.up = false;
    } 
}
function drawPlayer(){
    ctx.beginPath();
    ctx.fillRect(player.x,player.y, player.size, player.size);
    ctx.closePath();
}
function movePlayer() {
    if (key.up) {
        player.y -= player.speed;
    } else{
        player.y += player.speed * 2;
    }

    if (player.y <= 0) player.y = 0;
    if (player.y >= canvas.height - player.size) player.y = canvas.height - player.size;

}
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    movePlayer();
    rockList.forEach((b) => { b.update() });
}
button.addEventListener('click',()=>{
    init();
    draw();
    rockInit();
    button.style.display="none";
    canvas.style.display="flex";
    window.setInterval(draw,10);
})