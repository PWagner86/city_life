import City from "./city.js";

export default class Manager {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = width;
    this.height = height;
    this.city = new City(this.width, this.height);
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.city.setTraffic();
    this.#animate();
  }

  #animate() {
    requestAnimationFrame((t) => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.city.getStreet(this.ctx);
      this.city.getBoardWalk(this.ctx);
      this.city.moveTraffic(this.ctx);
      this.city.getBuilding(this.ctx);
      this.#animate();
    });
  }
}
