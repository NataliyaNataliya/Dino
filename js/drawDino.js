"use strict";
/*
Game Dino 
*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const sprite = document.querySelector("#spriteImg");
let step = true; //шаг левой - true, правой - false
let xBg = 0;
let speedBg = 5;
let fps = 1;

function move() {
  setTimeout(function () {
    window.requestAnimationFrame(move);

    ctx.clearRect(0, 0, 1000, 400);

    if (xBg < -2404) {
      xBg = 0;
    }
    xBg -= speedBg;

    ctx.drawImage(sprite, -3, 104, 2404, 26, xBg, 285, 2404, 26); //road
    ctx.drawImage(sprite, 40, 104, 2404, 26, xBg + 2404, 285, 2404, 26); //road

    if (step) {
      step = false;
      ctx.drawImage(sprite, 1600, 0, 90, 101, 100, 203, 90, 101); //dino
      ctx.drawImage(sprite, 264, 0, 83, 75, xBg + 900, 0, 83, 75); //bird
    } else {
      step = true;
      ctx.drawImage(sprite, 1513, 0, 90, 101, 100, 203, 90, 101); //dino
      ctx.drawImage(sprite, 353, 0, 87, 62, xBg + 900, 0, 87, 62); //bird
    }
    ctx.drawImage(sprite, 165, 0, 99, 35, xBg + 500, 10, 99, 35); //cloud
    ctx.drawImage(sprite, 651, 0, 52, 98, xBg + 1100, 199, 52, 98); //cactus
    ctx.drawImage(sprite, 751, 0, 52, 98, xBg + 1700, 199, 52, 98); //cactus2
    ctx.drawImage(sprite, 165, 0, 99, 35, xBg + 1500, 70, 99, 35); //cloud2
    ctx.drawImage(sprite, 165, 0, 99, 35, xBg + 2000, 10, 99, 35); //cloud3
    ctx.drawImage(sprite, 446, 0, 34, 70, xBg + 2300, 227, 34, 70); //cactus34
    ctx.drawImage(sprite, 165, 0, 99, 35, xBg + 2500, 30, 99, 35); //cloud4
    ctx.drawImage(sprite, 446, 0, 34, 70, xBg + 2700, 227, 34, 70); //cactus35
  }, 100 / fps);
}

function init() {
  window.requestAnimationFrame(move);
}

window.addEventListener("load", init);
