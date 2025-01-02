import { getRandomIntMinMax, lerp, vLerp } from "../utils/math.js";
import Point from "./primitives/point.js";
import Segment from "./primitives/segment.js";
import Car from "./car.js";

export default class City {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.center = new Point(this.width / 2, this.height / 2);
    this.streetStart = new Point(0, this.center.y);
    this.streetEnd = new Point(this.width, this.center.y);
    this.streetWidth = 100;
    this.boardWalkWidth = 75;
    this.gap = (this.streetWidth - this.boardWalkWidth) / 2;
    this.boardWalkTopStart = new Point(
      0,
      this.center.y - this.streetWidth + this.gap
    );
    this.boardWalkTopEnd = new Point(
      this.width,
      this.center.y - this.streetWidth + this.gap
    );
    this.boardWalkBottomStart = new Point(
      0,
      this.center.y + this.streetWidth - this.gap
    );
    this.boardwalktBottomEnd = new Point(
      this.width,
      this.center.y + this.streetWidth - this.gap
    );
    this.trafficCount = 30;
    this.trafficTop = [];
    this.trafficBottom = [];
    this.speed = 1;
    this.maxOffset = 5000;
    this.minOffset = 100;
  }

  setStreet(ctx) {
    const street = new Segment(this.streetStart, this.streetEnd);
    const middleLine = new Segment(this.streetStart, this.streetEnd);
    street.draw(ctx, { width: this.streetWidth, color: "grey" });
    ctx.save();
    ctx.setLineDash([20, 10]);
    middleLine.draw(ctx, { color: "white" });
    ctx.restore();
  }

  setBoardWalk(ctx) {
    const boardWalkTop = new Segment(
      this.boardWalkTopStart,
      this.boardWalkTopEnd
    );
    const boardWalkBottom = new Segment(
      this.boardWalkBottomStart,
      this.boardwalktBottomEnd
    );
    boardWalkTop.draw(ctx, { width: 75, color: "darkgrey" });
    boardWalkBottom.draw(ctx, { width: 75, color: "darkgrey" });
  }

  setTraffic() {
    if (this.trafficCount <= 1) {
      this.trafficTop.push(
        new Car(this.width + 10, this.center.y - this.streetWidth / 4)
      );
    }
    for (let i = 0; i < this.trafficCount / 2; i++) {
      const randIntTop = getRandomIntMinMax(
        this.width + this.minOffset,
        this.width + this.maxOffset
      );
      const randIntBottom = getRandomIntMinMax(
        -this.minOffset,
        -this.maxOffset
      );
      this.trafficTop.push(
        new Car(randIntTop, this.center.y - this.streetWidth / 4)
      );
      this.trafficBottom.push(
        new Car(randIntBottom, this.center.y + this.streetWidth / 4)
      );
    }
    this.checkTraffic(this.trafficTop);
    this.checkTraffic(this.trafficBottom);
  }

  checkTraffic(array) {
    const margin = 100;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j) {
          if (
            array[i].x < array[j].x + array[j].width + margin &&
            array[i].x + array[i].width + margin > array[j].x
          ) {
            const shift = array[i].x < array[j].x ? -margin : margin;
            array[i].x += shift;
          }
        }
      }
    }
  }

  moveTraffic(ctx) {
    const randIntTop = getRandomIntMinMax(
      this.width + this.minOffset,
      this.width + this.maxOffset
    );
    const randIntBottom = getRandomIntMinMax(-this.minOffset, -this.maxOffset);
    this.trafficTop.forEach((car) => {
      car.draw(ctx, 270);
      car.x -= this.speed;
      if (car.x < -this.minOffset) {
        car.x = randIntTop;
      }
    });
    this.trafficBottom.forEach((car) => {
      car.draw(ctx);
      car.x += this.speed;
      if (car.x > this.width + this.minOffset) {
        car.x = randIntBottom;
      }
    });
  }
}
