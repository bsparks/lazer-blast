import Canvas from 'lazer/canvas/Canvas.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';
import BackgroundColor from 'lazer/canvas/BackgroundColor.js';
import RandomDataGenerator from 'lazer/math/RandomDataGenerator.js';

let rnd = new RandomDataGenerator();

let canvas = Canvas(512, 256);

BackgroundColor(canvas, 'rgb(200, 50, 50)');

AddToDOM(canvas, document.body);

let ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';

for (let i = 0; i < 64; i++)
{
    ctx.fillRect(rnd.between(0, 500), rnd.between(0, 200), 32, 32);
}

window.canvas = canvas;
window.ctx = ctx;
