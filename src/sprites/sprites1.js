import Loader from 'lazer/loader/Loader';
import Canvas from 'lazer/canvas/Canvas.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';
import BackgroundColor from 'lazer/canvas/BackgroundColor.js';

let loader = new Loader();

loader.image('logo', '/assets/lazer.png');

loader.start().then(render);

function render() {
    let canvas = Canvas(512, 256);
    let ctx = canvas.getContext('2d');


}

