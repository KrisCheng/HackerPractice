'use strict';

//Event

var showMessage = function(){
  console.log("Hello World!");
}

var btn = document.getElementById("myBtn");
// btn.onclick = function(){
//   alert(this.id);
// }
btn.addEventListener("click", function(){
  console.log(this.id);
  console.log(event.currentTarget === this); //true
  console.log(event.target === this); //true
},true);

//必须同函数名，否则无效
btn.removeEventListener("click", function(){
  console.log(this.id);
},true);

//根据事件类型处理
var handler = function(event){
  switch(event.type){
    case "click":
      alert("Clicked!");
      break;
    case "mouseover":
      event.target.style.backgroundColor = "red";
      break;
    case "mouseout":
      event.target.style.backgroundColor = "";
      break;
  }
};

btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;
