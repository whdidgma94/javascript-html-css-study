class Hurdle{
    constructor () {
        this.x;
        this.y;
        this.width;
        this.height;
        this.speed;
    }
    init() {
        this.x = canvas.width;
        this.y = 140;
        this.width = 10;
        this.height = 10;
        this.speed = Math.random()*1+1;
    }
    update() {
        this.x-=this.speed;
    }
    render(ctx) {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y-this.height+10, this.width, this.height);
        ctx.closePath();
    }
    collision(px, py, size) {
        let pdw = this.x - px;
        let pdh = this.y - py;
        let pdc = pdw * pdw + pdh * pdh;
        return Math.pow(size + 10, 2) > pdc;
    }
}