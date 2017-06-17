'use strict';
var person = {
  name : 'Kris',
  age : 22
};
console.log(person.name);

//创建数组
var arr1 = new Array();
var arr2 = new Array(20);
var arr3 = new Array("Kris", "Chan");
console.log(arr2.length);

var arr4 = ["A", "B", "C"];
// arr4.length = 10;
arr4[5] = "E";
console.log(arr4[5]);
console.log(arr4.length); //自动扩展数组

var colors = ["red", "black", "blue"];
console.log(colors.toString());
console.log(colors.valueOf());
//以:分隔
console.log(colors.join(":"));

var colors2 = new Array();
var count = colors2.push("red", "black");
console.log(count);
count = colors2.push("blue");
console.log(count);
var item = colors2.unshift("hello");
console.log(item);
console.log(colors2.length);
