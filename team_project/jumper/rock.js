class Rock {
    constructor() {
        this.radius = 7;
        this.color = "orange";
        this.x; 
        this.y; 
        this.dx; 
        this.dy;  
        this.cWidth = 800;
        this.cHeight = 500;
        this.speed = Math.floor(Math.random()*4)+1;
        this.hp= Math.floor(Math.random()*10)+1;
    }
    init() {
        this.x = this.cWidth - 10;
        this.y = Math.random() * (this.cHeight - this.radius);
        let dx = 10-this.x;
        let dy = Math.random() * (this.cHeight - this.radius) - this.y;
        let c = Math.sqrt(dx * dx + dy * dy);
        this.dx = dx / c;
        this.dy = dy / c;
        console.log(this.dy);
    }
    update() {
        this.x += this.dx * this.speed;
        this.y -= this.dy * this.speed;
        console.log(this.y);
        if (this.x < -this.radius || this.y < -this.radius || this.y > this.cHeight + this.radius) {
            // console.log(this.y);
            this.init();
        }else 
        if(this.hp<0){
            this.init();
            
        }
    }
    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    render2(ctx){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillText(`"${this.hp}"`,this.x,this.y+10);
        ctx.closePath();
    }
    collision(px, py, size) {
        let pdw = this.x - px;
        let pdh = this.y - py;
        let pdc = pdw * pdw + pdh * pdh;
        return Math.pow(size + this.radius, 2) > pdc;
    }
}