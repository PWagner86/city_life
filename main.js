import Manager from "./js/classes/manager.js";

const mainCanvas = document.querySelector("#main__canvas");
const HEIGHT = document.querySelector(".canvas__container").clientHeight;
const WIDTH = document.querySelector(".canvas__container").clientWidth;
const mainManager = new Manager(mainCanvas, WIDTH, HEIGHT);

mainManager.init();