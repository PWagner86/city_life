export default class Manager {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = width;
    this.height = height;
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
}
