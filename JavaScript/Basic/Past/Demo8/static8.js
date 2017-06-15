'use strict';
//Canvas

//smile face
var canvas = document.getElementById("test-canvas-smile"),
    ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,200,200);
    ctx.fillStyle = '#dddddd';
    ctx.fillRect(10,10,130,130);
    var path = new Path2D();
    path.arc(75, 75, 50, 0, Math.PI*2, true);
    path.moveTo(110,75);
    path.arc(75, 75, 35, 0, Math.PI, false);
    path.moveTo(65,65);
    path.arc(60, 65, 5, 0, Math.PI*2, true);
    path.moveTo(95,65);
    path.arc(90, 65, 5, 0, Math.PI*2, true);
    ctx.strokeStyle = '#0000ff';
    ctx.stroke(path);

//test with shadow
var
    canvas = document.getElementById('test-text-canvas'),
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = '#666666';
    ctx.font = '24px Arial';
    ctx.fillStyle = '#333333';
    ctx.fillText('带阴影的文字', 20, 40);
