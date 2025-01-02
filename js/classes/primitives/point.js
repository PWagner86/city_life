export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx, {radius = 20, color = 'red'} = {}) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.fillStyle = color
        ctx.arc(this.x, this.y, radius / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}