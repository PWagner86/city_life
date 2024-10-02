import Manager from "./js/classes/manager.js";

const mainCanvas = document.querySelector('#main-canvas');
const MAINCANVASWIDTH = mainCanvas.width = 1000;
const MAINCANVASHEIGHT = mainCanvas.height = 600;
// const mainCtx = mainCanvas.getContext('2d');

const manager = new Manager(mainCanvas);

window.addEventListener('load', manager.init());