import { getRandomInt } from "../utils/math.js";

export default class Car {
  constructor(x, y, length = 30, width = 15) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;
    this.red = getRandomInt(255);
    this.green = getRandomInt(255);
    this.blue = getRandomInt(255);
  }

  draw(ctx) {
    // ctx.beginPath();
    
    ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    ctx.fillRect(this.x, this.y, this.length, this.width);
    // ctx.arc(this.x, this.y, this.length / 2, 0, Math.PI * 2);
    // ctx.fill();
  }
}
