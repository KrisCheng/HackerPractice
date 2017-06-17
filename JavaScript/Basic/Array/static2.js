'use strict';

//Array操作

var values = [0, 1, 5, 10, 23];
values.sort();
console.log(values);

//sort接受一个比较函数
function compare(value1, value2){
  if(value1 < value2){
    return -1;
  }
  if(value1 > value2){
    return 1;
  }
  else{
    return 0;
  }
}
values.sort(compare);
console.log(values);

//concat
var colors = ["red", "black", "blue"];
colors2 = colors.concat("yellow", ["redss ", "orange"]);
console.log(colors2);

//date
console.log(Date.now());
