'use strict';

// Canvas基本用法

var drawing = document.getElementById("drawing");

if(drawing.getContext){
  var context = drawing.getContext("2d");
  context.strokeStyle = "red";
  context.fillStyle = "orange";
  context.fillRect(100, 10, 150, 50);
  context.strokeRect(100, 10, 150, 50);
  context.fillStyle = "rgba(0,0,255,0.5)";
  context.fillRect(90, 20, 30, 30);
  context.clearRect(120,20,10,10);
}
