export default class City {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.streetWidth = 50;
    }

    setStreets(ctx) {
        ctx.fillStyle =  "#3b3b3b";
        ctx.fillRect(0, (this.height / 2) - (this.streetWidth / 2), this.width, this.streetWidth);
        ctx.fillRect((this.width / 2) - (this.streetWidth / 2), 0, this.streetWidth, this.height);
        ctx.fillRect((this.width / 2) + (this.width / 4) - (this.streetWidth / 2), 0, this.streetWidth, this.height);
        ctx.fillRect((this.width / 4) - (this.streetWidth / 2), 0, this.streetWidth, this.height);
    }
}