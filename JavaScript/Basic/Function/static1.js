'use strict';

//Function

function sum(value1, value2){
  return value1 + value2;
}
var anothersum = sum;
console.log(anothersum(10,2222));

//没有重载
console.log(test(10,10)); //30
function test(v1, v2){
  return v1 + v2;
}

function test(v1, v2){
  return v1 + v2 *2;
}
console.log(test(10,10)); //30

//函数作为传递参数
function someFunction(aFunction,aArgs){
  return aFunction(aArgs);
}
function add10(x){
  return x+10;
}
console.log(someFunction(add10,100));

//一个函数中返回另一个函数
function createComparisionFunction(propertyName){
  return function(obj1, obj2){
    var value1 = obj1[propertyName];
    var value2 = obj2[propertyName];
    if(value1 < value2){
      return -1;
    }
    else if(value1 > value2){
      return 1;
    }
    else{
      return 0;
    }
  };
}

var data = [
  {
    name: "Kris",
    age: 22
  },
  {
    name: "Chan",
    age: 28
  }
];
data.sort(createComparisionFunction("age"));
console.log(data[0]);
data.sort(createComparisionFunction("name"));
console.log(data[0]);
