'use strict';

//一元云算符
var age = 22;
console.log(age++);
console.log(age);

//各种类型运算
var s1 = "200";
var s2 = 'z';
var f = 1.1
var o = {
  valueOf: function(){
    return -3;
  }
};
var b1 = true;

s1++;  //有效字符串转换
s2++;  //NaN
f--;   //浮点舍入错误
o--;   // -2
b1--;

console.log(s1);
console.log(s2);
console.log(f);
console.log(o);
console.log(b1);

// 位操作
console.log(~25); // -26 按位非NOT
console.log(25 & 1); // 1 按位与AND
console.log(25 | 3); // 27 按位或OR
console.log(25 ^ 3); // 27 按位异或XOR
console.log(2 << 5); // 64 左移
console.log(64 >> 5); // 2 右移
console.log(-64 >>> 5); // 134217726 无符号位右移

//运算符
console.log('5'+5); // 55
console.log(5-'3'); //2
console.log(5-true); //4
console.log('B' < 'a'); //true
console.log('23' < '3'); //true

console.log('55' == 55); //true
console.log('55' === 55); //false
console.log('55' !== 55); //true

// break && continue
var num = 0;
for(var i = 1; i < 10; i++){
  if(i%5 === 0){
    break;
  }
  num++;
};
console.log(num);

var num = 0;
for(var i = 1; i < 10; i++){
  if(i%5 === 0){
    continue;
  }
  num++;
};
console.log(num);

function sayHi(){
  alert(arguments[0] + ', ' + arguments[1]);
}
sayHi("KRIS",'Tongji');
