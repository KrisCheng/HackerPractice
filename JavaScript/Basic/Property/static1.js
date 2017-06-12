'use strict';

//基本类型和引用类型

var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Kris";
console.log(obj2.name); // Kris

//参数只能按值传递
function addTen(num){
  num += 10;
  return num;
}
var count = 20;
var result = addTen(count);
console.log(count); // 20
console.log(result); // 30

function setName(obj){
  obj.name = "Kris";
  obj = new Object;
  obj.name = "Chan";
}
var person = new Object();
setName(person);
console.log(person.name); //Kris

console.log(typeof null);

if(true){
  var color = "blue";
}
console.log(color); // blue

var color1 = 'red';
function getColor(){
  // var color1 = "black";
  return color1;
}
console.log(getColor()); //red
