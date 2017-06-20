/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*jslint node: true */

function lemon() {
    var x = document.getElementById("lemon").value;
    x = x * 20;
    document.getElementById("lemonp").innerHTML = x;
}
document.getElementById("lemonb").addEventListener("click", lemon, false);

function lime() {
    var x = document.getElementById("lime").value;
    x = x * 25;
    document.getElementById("limep").innerHTML = x;
}
document.getElementById("limeb").addEventListener("click", lime, false);

function orange() {
    var x = document.getElementById("orange").value;
    x = x * 10;
    document.getElementById("orangep").innerHTML = x;
}
document.getElementById("orangeb").addEventListener("click", orange, false);

function grapefruit() {
    var x = document.getElementById("grapefruit").value;
    x = x * 6;
    document.getElementById("grapefruitp").innerHTML = x;
}
document.getElementById("grapefruitb").addEventListener("click", grapefruit, false);

function clementine() {
    var x = document.getElementById("clementine").value;
    x = x * 20;
    document.getElementById("clementinep").innerHTML = x;
}
document.getElementById("clementineb").addEventListener("click", clementine, false);

function bloodorange() {
    var x = document.getElementById("bloodorange").value;
    x = x * 12;
    document.getElementById("bloodorangep").innerHTML = x;
}
document.getElementById("bloodorangeb").addEventListener("click", bloodorange, false);

function rhubarb() {
    var x = document.getElementById("rhubarb").value;
    x = x * 15;
    document.getElementById("rhubarbp").innerHTML = x;
}
document.getElementById("rhubarbb").addEventListener("click", rhubarb, false);

function celery() {
    var x = document.getElementById("celery").value;
    x = x * 10;
    document.getElementById("celeryp").innerHTML = x;
}
document.getElementById("celeryb").addEventListener("click", celery, false);

function ginger() {
    var x = document.getElementById("ginger").value;
    x = x * 16;
    document.getElementById("gingerp").innerHTML = x;
}
document.getElementById("gingerb").addEventListener("click", ginger, false);

function carrot() {
    var x = document.getElementById("carrot").value;
    x = x * 30;
    document.getElementById("carrotp").innerHTML = x;
}
document.getElementById("carrotb").addEventListener("click", carrot, false);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);