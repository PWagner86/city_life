export default class City {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.center = {
      x: this.width / 2,
      y: this.height / 2,
    };
    this.streetWidth = 50;
    this.halfLane = this.streetWidth / 2 / 2;
    this.carX = 0;
  }

  drawStreets(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "#696363";
    ctx.lineWidth = this.streetWidth;
    ctx.moveTo(0, this.center.y);
    ctx.lineTo(this.width, this.center.y);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.setLineDash([30, 30]);
    ctx.moveTo(0, this.center.y);
    ctx.lineTo(this.width, this.center.y);
    ctx.stroke();
    ctx.restore();
  }

  drawCar(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.carX, this.center.y + this.halfLane - 5, 10, 10);
  }

  updateCar(ctx) {
    this.drawCar(ctx);
    this.carX+=1;
  }
}
