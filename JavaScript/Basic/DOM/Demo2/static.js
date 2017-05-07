'use strict';
//获取图片
function changePic(pic){
  var source = pic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  var text = pic.innerHTML;
  var desc = document.getElementById('desc');
  desc.firstChild.nodeValue = text;
}

function countBodyChildren(){
  var body = document.getElementsByTagName("body")[0];
  console.log(body.nodeType);
}
 window.onload = countBodyChildren;
