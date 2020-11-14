/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(/*! ./lib/sayHello.js */ \"./lib/sayHello.js\");\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\n__webpack_require__(/*! ./lib/myAnimation.js */ \"./lib/myAnimation.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYXlIZWxsbyBmcm9tICcuL2xpYi9zYXlIZWxsby5qcyc7XG5pbXBvcnQgJy4vbGliL215QW5pbWF0aW9uLmpzJztcblxuc2F5SGVsbG8oKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/myAnimation.js":
/*!****************************!*\
  !*** ./lib/myAnimation.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// import {TimelineMax} from 'gsap';\n// var $ = require('jquery');\n\nvar canvas = document.getElementById('yoyo');\nvar ctx = canvas.getContext('2d');\n\nvar N = 300;\n// var radius = 50;\nvar xc = 300;\nvar yc = 250;\nvar time = 0;\nvar figure = 13;\nvar myRadius, x, y, teta;\n\nfunction DrawCircle(radius, color, offset) {\n\n  ctx.strokeStyle = color;\n  ctx.beginPath();\n\n  for (var i = 0; i < N; i++) {\n    teta = i * 2 * Math.PI / N;\n    myRadius = radius + 30 * Math.sin(figure * teta + offset);\n    x = xc + myRadius * Math.cos(teta);\n    y = yc + myRadius * Math.sin(teta);\n\n    if (i === 0) {\n      ctx.moveTo(x, y);\n    } else {\n      ctx.lineTo(x, y);\n    }\n  }\n\n  ctx.closePath();\n  ctx.stroke();\n  // ctx.fill();\n}\n\nfunction Draw() {\n  if (time <= 800) {\n    time++;\n  };\n  if (time === 800) {\n    time = -800;\n  };\n  ctx.clearRect(0, 0, 700, 800);\n  for (var i = 0; i < 20; i++) {\n    var color = i % 2 ? 'rgba(255,255,255,0.5)' : 'rgba(' + 10 * i + ',0,0,' + i / 10 + ')';\n    DrawCircle(i * 6 * time / 400, color, i * time / 200);\n  }\n}\n\nfunction render() {\n  Draw();\n  window.requestAnimationFrame(render);\n}\n\nrender();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbXlBbmltYXRpb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2xpYi9teUFuaW1hdGlvbi5qcz80YTAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7VGltZWxpbmVNYXh9IGZyb20gJ2dzYXAnO1xuLy8gdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5b3lvJyk7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBOID0gMzAwO1xuLy8gdmFyIHJhZGl1cyA9IDUwO1xudmFyIHhjID0gMzAwO1xudmFyIHljID0gMjUwO1xudmFyIHRpbWUgPSAwO1xudmFyIGZpZ3VyZSA9IDEzO1xudmFyIG15UmFkaXVzLCB4LCB5LCB0ZXRhO1xuXG5cbmZ1bmN0aW9uIERyYXdDaXJjbGUocmFkaXVzLCBjb2xvciwgb2Zmc2V0KSB7XG5cbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eC5iZWdpblBhdGgoKTtcblxuICBmb3IgKHZhciBpID0gMCA7IGkgPCBOOyBpKyspIHtcbiAgXHR0ZXRhID0gaSoyKk1hdGguUEkvTjtcbiAgXHRteVJhZGl1cyA9IHJhZGl1cyszMCpNYXRoLnNpbihmaWd1cmUqdGV0YStvZmZzZXQpO1xuICAgIHggPSB4YyArIG15UmFkaXVzKk1hdGguY29zKHRldGEpO1xuICAgIHkgPSB5YyArIG15UmFkaXVzKk1hdGguc2luKHRldGEpO1xuICBcbiAgICBpZiAoaT09PTApIHtjdHgubW92ZVRvKHgseSk7fVxuICAgIGVsc2Uge1xuICBcdGN0eC5saW5lVG8oeCx5KTtcbiAgICB9XG4gIH1cblxuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5zdHJva2UoKTtcbiAgLy8gY3R4LmZpbGwoKTtcbn1cblxuZnVuY3Rpb24gRHJhdygpIHtcbiAgaWYgKHRpbWUgPD0gODAwKSB7dGltZSsrO307XG4gIGlmICh0aW1lID09PSA4MDApIHt0aW1lID0gLTgwMDt9O1xuICBjdHguY2xlYXJSZWN0KDAsMCw3MDAsODAwKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gIFx0dmFyIGNvbG9yID0gKGklMik/J3JnYmEoMjU1LDI1NSwyNTUsMC41KSc6J3JnYmEoJysxMCppKycsMCwwLCcraS8xMCsnKSc7XG4gICAgRHJhd0NpcmNsZShcbiAgICAgIGkqNip0aW1lLzQwMCxcbiAgICAgIGNvbG9yLFxuICAgICAgaSp0aW1lLzIwMFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBEcmF3KCk7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn1cblxucmVuZGVyKCk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/myAnimation.js\n");

/***/ }),

/***/ "./lib/sayHello.js":
/*!*************************!*\
  !*** ./lib/sayHello.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n    var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n    window.console.log.apply(console, args);\n  } else if (window.console) {\n    window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n  }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2F5SGVsbG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2xpYi9zYXlIZWxsby5qcz8xNTc1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID4gLTEpIHtcbiAgICB2YXIgYXJncyA9IFsnXFxuICVjIE1hZGUgd2l0aCDinaTvuI8gYnkgUml2ZXJjb2RlICVjIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gJWMgJWMg8J+QsyBcXG5cXG4nLCAnYm9yZGVyOiAxcHggc29saWQgIzAwMDtjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjAwMTsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMxYzFjMWM7IHBhZGRpbmc6NXB4IDA7Ym9yZGVyOiAxcHggc29saWQgIzAwMDsnLCAnYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNiMDk3NmQ7IGJhY2tncm91bmQ6ICNmZmY7IHBhZGRpbmc6NXB4IDA7J107XG4gICAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgd2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gUml2ZXJjby5kZSAtIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gIOKdpO+4jycpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNheUhlbGxvO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/sayHello.js\n");

/***/ })

/******/ });