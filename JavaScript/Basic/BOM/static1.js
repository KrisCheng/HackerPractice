'use strict';

//BOM

var age = 22;
function sayAge(){
  console.log(window.age);
}
console.log(window.age);
sayAge();
window.sayAge();

window.color = 'red';
delete window.color;
console.log(window.color);
window.resizeTo(100,100);


//超时调用
var test = setTimeout(function(){
  console.log("Hello, World");
},100); //毫秒数
// clearTimeout(test);  //取消超时调用

// confirm("Are you ok?");
// prompt("What's your name?","Kris");

// setTimeout(function(){
//   location.replace("http://www.baidu.com");
// },1000);  //1s后跳转，且无法退后返回

// 检测插件
function hasPlugin(name){
  name = name.toLowerCase();
  for(var i = 0; i < navigator.plugins.length; i ++){
    if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
      return true;
    }
  }
  return false;
}
alert(hasPlugin("Flash"));
