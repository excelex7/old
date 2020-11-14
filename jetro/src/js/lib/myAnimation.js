import {TimelineMax} from 'gsap';
var $ = require('jquery');

//обьекти для разных анимаций
var anime1 = new TimelineMax({ yoyo: true,delay: 3,repeat: -1});
var anime2 = new TimelineMax({ repeat: -1});
var anime3 = new TimelineMax();
var anime4 = new TimelineMax();
var anime5 = new TimelineMax({ repeat: -1});
var anime6 = new TimelineMax();
var anime7 = new TimelineMax({ repeat: -1}); 

//переменные классов и доп.переменнные
var $sblink = $('.sibebar-menu');
var $nav = $('.header-menu');
var $logo = $('.header-logo');
var $hLink = $('.header-menu>li');
var $icon = $('.blog-post-icon__item');
var $photo2 = $('.block-post-content-photo__img');
var i = true;
var $button = $('.runButton');

//анимация для меню сайдбара
anime1.staggerFromTo($sblink,3,{x:50,opacity:0},{x:0,opacity:1},0);


//для мигающего логотипа
anime2
  .to($logo,0.2,{opacity:0},0)
  .to($logo,0.05,{opacity:1}); 


//при наведении указателя мышки на лого - оно не мигает
$logo.hover(
  function() {
 	 anime2.play(0);
 	 anime2.pause();},
  function() {
 	 anime2.resume();},
);

//когда наводишся на меню шапки - оно увеличивается
$nav.hover(
  function() {
  		anime3.to($nav,1,{x: 0,scale: 1.5});},
  function() {
  		anime3.to($nav,1,{x: 0,scale: 1});}
);

//пункты меню вылазят по одному
anime4.staggerFromTo($hLink,3,{x:-30,opacity:0},{x:0,opacity:1},0.5);

//сменный цвет иконок
anime5
  .to($icon,5,{background: '#e8603c', autoAlpha: 0.1})
  .to($icon,5,{background: 'red',autoAlpha: 1})
  .to($icon,5,{background: 'red',autoAlpha: 0.1})
  .to($icon,5,{background: 'yellow',autoAlpha: 1})
  .to($icon,5,{background: 'yellow',autoAlpha: 0.1})
  .to($icon,5,{background: 'green',autoAlpha: 1})
  .to($icon,5,{background: 'green',autoAlpha: 0.1})
  .to($icon,5,{background: 'blue',autoAlpha: 1})
  .to($icon,5,{background: 'blue',autoAlpha: 0.1})
  .to($icon,5,{background: 'purple',autoAlpha: 1})
  .to($icon,5,{background: 'purple',autoAlpha: 0.1})
  .to($icon,5,{background: '#e8603c', autoAlpha: 1}); 

//при клике на фото 2го поста - фото делает поворот на 180
$photo2.on('click', function() {
  if ( i ) {
	    anime6.to($photo2,1,{rotation: 180, autoAlpha: 0, width: '50%'});
	    anime6.set($photo2,{autoAlpha: 1, width: '100%'});
	    i = false;
  } else {  
	    anime6.to($photo2,1,{rotation: 360, autoAlpha: 0, width: '50%'});
	    anime6.set($photo2,{rotation: 0, autoAlpha: 1, width: '100%'});
 		i = true;
  }
});

//фото 2го поста, и кнопка активной страницы скачут...
anime7
  .to($button,0.5,{y: -10},0)
  .to($button,0.1,{y: 0})
  .to($photo2,0.5,{y: -10},0)
  .to($photo2,0.1,{y: 0});




//движения буквой j с миганием
// .to($logo,0.5,{x:0,y:10, opacity:0})
// .to($logo,0.1,{x:0,y:10, opacity:1})
// .to($logo,0.5,{x:-20,y:10, opacity:0})	
// .to($logo,0.1,{x:-20,y:10, opacity:1})
// .to($logo,0.5,{x:0,y:10, opacity:0})
// .to($logo,0.1,{x:0,y:10, opacity:1})
// .to($logo,0.5,{x:0,y:0, opacity:0})
// .to($logo,0.1,{x:0,y:0, opacity:1});

////плохой   код 
// $nav.on('mouseover', function() {
//   anime3.to($nav,1,{x: 0,scale: 1.5}); 
// });
// $nav.on('mouseout', function() {
//   anime3.set($nav,{x: 0,scale: 1}); 
// });
