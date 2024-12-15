import { getRandomInt, getRandomIntMinMax } from "../utils/math.js";
import Car from "./car.js";

export default class City {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.center = { x: this.width / 2, y: this.height / 2 };
    this.streetWidth = 100;
    this.halfLane = this.streetWidth / 2 / 2;
    this.streetInToTown = { x: this.width / 2, y: this.center.y };
    this.firstCurve = { x: this.width / 2 + 50, y: this.center.y - 20 };
    this.secondCurve = { x: this.width / 2 + 80, y: this.center.y - 60 };
    this.streetOutOfTown = { x: this.width - 400, y: -100 };
    this.trafficCount = 30;
    this.traffic = [];

    this.setTraffic();
  }

  drawStreets(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "#696363";
    ctx.lineWidth = this.streetWidth;
    ctx.moveTo(0, this.center.y);
    ctx.lineTo(this.streetInToTown.x, this.streetInToTown.y);
    ctx.lineTo(this.firstCurve.x, this.firstCurve.y);
    ctx.lineTo(this.secondCurve.x, this.secondCurve.y);
    ctx.lineTo(this.streetOutOfTown.x, this.streetOutOfTown.y);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.setLineDash([30, 30]);
    ctx.moveTo(0, this.center.y);
    ctx.lineTo(this.streetInToTown.x, this.streetInToTown.y);
    ctx.lineTo(this.firstCurve.x, this.firstCurve.y);
    ctx.lineTo(this.secondCurve.x, this.secondCurve.y);
    ctx.lineTo(this.streetOutOfTown.x, this.streetOutOfTown.y);
    ctx.stroke();
    ctx.restore();
  }

  setTraffic() {
    for (let i = 0; i < this.trafficCount; i++) {
      const randomX = getRandomIntMinMax(50, 1000);
      this.traffic.push(
        new Car(randomX * -1, this.center.y + this.halfLane - 2)
      );
    }
  }

  updateTraffic(ctx) {
    for (const car of this.traffic) {
      car.draw(ctx);
      if (car.x < this.streetInToTown.x) {
        car.x += 0.5;
      }
      if (car.x >= this.streetInToTown.x && car.x < this.firstCurve.x) {
        car.x += 0.4;
        car.y -= 0.2;
      }
      if (car.x >= this.firstCurve.x && car.x < this.secondCurve.x) {
        car.x += 0.2;
        car.y -= 0.2;
      }
      if (car.x >= this.secondCurve.x) {
        car.x += 0.3;
        car.y -= 0.5;
      }

      if (car.y < -50) {
        car.x = getRandomIntMinMax(50, 5000) * -1;
        car.y = this.center.y + this.halfLane - 2;
      }
    }
  }
}
