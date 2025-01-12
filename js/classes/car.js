import { getRandomInt } from "../utils/math.js";

export default class Car {
  constructor(x, y, length = 50, width = 50) {
    this.x = x - length / 2;
    this.y = y - width / 2;
    this.length = length;
    this.width = width;
    this.pathToImg = "assets/pics/cars/";
    this.imgSrc = ["sports_car.png", "white_car.png", "police_car.png"];
    this.randInt = getRandomInt(this.imgSrc.length);
  }

  draw(ctx, degree = 90) {
    const image = new Image();
    image.src = `${this.pathToImg}${this.imgSrc[this.randInt]}`;
    ctx.save();
    ctx.translate(this.x + this.length / 2, this.y + this.width / 2);
    ctx.rotate((degree * Math.PI) / 180);
    ctx.drawImage(
      image,
      -this.width / 2,
      -this.length / 2,
      this.width,
      this.length
    );
    ctx.restore();
  }
}
