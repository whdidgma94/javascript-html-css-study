class Rock {
    constructor() {
        this.radius = 30;
        this.speed;
        this.style = Math.floor(Math.random()*4);
        this.x;
        this.y;
        this.dx;
        this.dy;
        this.hp;
        this.cWidth = 800;
        this.cHeight = 400;
    }
    init() {
        this.x = this.cWidth - 10;
        this.y = Math.random() * (this.cHeight - this.radius); 
        this.speed = Math.floor(Math.random()*4)+1;
        this.hp = Math.floor(Math.random()*4)+1;
        let dx = 200 - this.x;
        let dy = Math.random() * (this.cHeight - this.radius) - this.y;
        let c = Math.sqrt(dx * dx + dy * dy);
        this.dx = dx / c;
        this.dy = dy / c;
    }
    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
        if (this.x < -this.radius || this.y < -this.radius
            || this.x > this.cWidth + this.radius || this.y > this.cHeight + this.radius
        ) {
            this.init();
        }
        if(this.hp<=0){
            this.init();
        }
    }
    render(ctx) {
        ctx.beginPath();
        ctx.drawImage(rockImgList[this.style], this.x, this.y, this.radius, this.radius);
        ctx.closePath();
    }
    render2(ctx){
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "bold 20px sans-serif";
    ctx.strokeStyle = "black";
    ctx.textAlign = "start";
    ctx.textBaseline="middle";
    ctx.fillText(this.hp,this.x,this.y+10);
    ctx.strokeText(this.hp,this.x,this.y+10);
    ctx.closePath();
    }
    collision(px, py, size) {
        let pdw = this.x - px;
        let pdh = this.y - py;
        let pdc = pdw * pdw + pdh * pdh;
        return Math.pow(size + this.radius, 2) > pdc;
    }
}