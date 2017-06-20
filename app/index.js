'use strict';
/*jslint node: true */

function lemon() {
    var x = document.getElementById("lemon").value;
    x = x*20;
    document.getElementById("lemonp").innerHTML = x;
}
document.getElementById("lemonb").addEventListener("click", lemon, false);

function lime() {
    var x = document.getElementById("lime").value;
    x = x*25;
    document.getElementById("limep").innerHTML = x;
}
document.getElementById("limeb").addEventListener("click", lime, false);

function orange() {
    var x = document.getElementById("orange").value;
    x = x*10;
    document.getElementById("orangep").innerHTML = x;
}
document.getElementById("orangeb").addEventListener("click", orange, false);

function grapefruit() {
    var x = document.getElementById("grapefruit").value;
    x = x*6;
    document.getElementById("grapefruitp").innerHTML = x;
}
document.getElementById("grapefruitb").addEventListener("click", grapefruit, false);

function clementine() {
    var x = document.getElementById("clementine").value;
    x = x*20;
    document.getElementById("clementinep").innerHTML = x;
}
document.getElementById("clementineb").addEventListener("click", clementine, false);

function bloodorange() {
    var x = document.getElementById("bloodorange").value;
    x = x*12;
    document.getElementById("bloodorangep").innerHTML = x;
}
document.getElementById("bloodorangeb").addEventListener("click", bloodorange, false);

function rhubarb() {
    var x = document.getElementById("rhubarb").value;
    x = x*15;
    document.getElementById("rhubarbp").innerHTML = x;
}
document.getElementById("rhubarbb").addEventListener("click", rhubarb, false);

function celery() {
    var x = document.getElementById("celery").value;
    x = x*10;
    document.getElementById("celeryp").innerHTML = x;
}
document.getElementById("celeryb").addEventListener("click", celery, false);

function ginger() {
    var x = document.getElementById("ginger").value;
    x = x*16;
    document.getElementById("gingerp").innerHTML = x;
}
document.getElementById("gingerb").addEventListener("click", ginger, false);

function carrot() {
    var x = document.getElementById("carrot").value;
    x = x*30;
    document.getElementById("carrotp").innerHTML = x;
}
document.getElementById("carrotb").addEventListener("click", carrot, false);