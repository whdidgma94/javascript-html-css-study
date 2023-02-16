class Bullet {
    constructor() {
        this.radius = 15;
        this.speed = 5;
        this.x;
        this.y;
        this.dx;
        this.dy;
        this.cWidth = 800;
        this.cHeight = 400;
    }
    init(px,py) {
        this.x = px+50;
        this.y = py; 
        let dx = this.cWidth;
        let dy = py;
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
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = "orange";
        ctx.fill();
    }

    collision(rx, ry, size) {
        let rdw = this.x - rx;
        let rdh = this.y - ry;
        let rdc = rdw * rdw + rdh * rdh;
        return Math.pow(size + this.radius, 2) > rdc;
    }
}