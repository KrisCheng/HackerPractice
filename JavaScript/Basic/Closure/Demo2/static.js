'use strict';
//闭包
function lazy_sum(arr){
  var sum = function (){
    return arr.reduce(function (x, y){
      return x+y;
    });
  }
  return sum;
}
var f1 = lazy_sum([1,2,3,4,5,9]);
var f2 = lazy_sum([1,2,3,4,5,9]);
console.log(f1===f2);

function count1(){
  var arr = [];
  for(var i = 1; i < 4; i++){
    arr.push(function(){
      return i * i;
    });
  }
  return arr;
}
var results1 = count1();
var f3 = results1[0];//16
var f4 = results1[1];//16
var f5 = results1[2];//16

function count2(){
  var arr = [];
  for(var i = 1; i < 4; i++){
    arr.push((function(n){
      return function(){
        return n * n;
      }
    })(i));
  }
  return arr;
}
var results2 = count2();
var f6 = results2[0];//1
var f7 = results2[1];//4
var f8 = results2[2];//9
console.log(f6());
console.log(f7());
console.log(f8());

function create_counter(initial){
  var x = initial || 0;
  return {
    inc: function(){
      x += 1;
      return x;
    }
  }
}

var c1 = create_counter();
c1.inc();
console.log(c1.inc());

// 错误的用法
// function alert1(){
//     n = 9991;
// }
// alert(n);

function test1(){
  var n = 999;
  function test2(){
    alert(n);
  }
  return test2;
}

var result3 = test1();
// result3(); //999
