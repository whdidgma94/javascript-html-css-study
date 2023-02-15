class Bullet {
    constructor() {
        this.radius = 15;
        this.speed;
        this.color = "orange";
        this.x;
        this.y;
        this.dx;
        this.dy;
        this.cWidth = 800;
        this.cHeight = 400;
    }
    init() {
            this.x = this.cWidth - 10;
            this.y = Math.random() * (this.cHeight - this.radius); 
            this.speed = Math.floor(Math.random()*4)+1;
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
    }
    render(ctx) {
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
    render2(ctx){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillText("1",this.x,this.y+10);
    ctx.closePath();
    }
    collision(px, py, size) {
        let pdw = this.x - px;
        let pdh = this.y - py;
        let pdc = pdw * pdw + pdh * pdh;
        return Math.pow(size + this.radius, 2) > pdc;
    }
}