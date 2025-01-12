import { getRandomIntMinMax } from "../utils/math.js";

export default class Building {
  constructor(name, x, y, length, width) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;
    this.center = {
      x: this.x + this.length / 2,
      y: this.y + this.width / 2,
    };
    this.red = getRandomIntMinMax(0, 255);
    this.green = getRandomIntMinMax(0, 255);
    this.blue = getRandomIntMinMax(0, 255);
    this.color = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.length, this.width);
    ctx.fillStyle = "white";
    ctx.font = "bold 20px Montserrat";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name, this.center.x, this.center.y);
    ctx.restore();
  }
}
