import City from "./city.js";

export default class Manager {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.city = new City(this.canvas.width, this.canvas.height);
    }

    init() {
        console.log('City Life is running...');
        this.city.setStreets(this.ctx);
    }
}