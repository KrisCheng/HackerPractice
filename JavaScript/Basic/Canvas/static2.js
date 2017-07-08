'use strict';

// Canvas clock

var drawing = document.getElementById("clock");

if(drawing.getContext){
  var context = drawing.getContext("2d");
  context.beginPath();
  context.arc(100, 100, 99, 0, 2 * Math.PI, false); //用于绘制圆形
  context.moveTo(194, 100);
  context.arc(100, 100, 94, 0, 2 * Math.PI, false);

  context.moveTo(100, 100);
  context.lineTo(100, 20);

  context.moveTo(100, 100);
  context.lineTo(35, 100);


  context.stroke();

  context.font = "bold 12px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("12", 100, 15);
}
