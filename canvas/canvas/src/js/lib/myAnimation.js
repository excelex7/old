// import {TimelineMax} from 'gsap';
// var $ = require('jquery');

var canvas = document.getElementById('yoyo');
let ctx = canvas.getContext('2d');

var N = 300;
// var radius = 50;
var xc = 300;
var yc = 250;
var time = 0;
var figure = 13;
var myRadius, x, y, teta;


function DrawCircle(radius, color, offset) {

  ctx.strokeStyle = color;
  ctx.beginPath();

  for (var i = 0 ; i < N; i++) {
  	teta = i*2*Math.PI/N;
  	myRadius = radius+30*Math.sin(figure*teta+offset);
    x = xc + myRadius*Math.cos(teta);
    y = yc + myRadius*Math.sin(teta);
  
    if (i===0) {ctx.moveTo(x,y);}
    else {
  	ctx.lineTo(x,y);
    }
  }

  ctx.closePath();
  ctx.stroke();
  // ctx.fill();
}

function Draw() {
  if (time <= 800) {time++;};
  if (time === 800) {time = -800;};
  ctx.clearRect(0,0,700,800);
  for (var i = 0; i < 20; i++) {
  	var color = (i%2)?'rgba(255,255,255,0.5)':'rgba('+10*i+',0,0,'+i/10+')';
    DrawCircle(
      i*6*time/400,
      color,
      i*time/200
    );
  }
}

function render() {
  Draw();
  window.requestAnimationFrame(render);
}

render();
