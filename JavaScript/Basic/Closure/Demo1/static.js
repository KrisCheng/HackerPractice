'use strict';

//作用域链
function createFunctions1(){
  var result = new Array();
  for(var i = 0; i < 10; i++){
    result[i] = function(){
      return i;
    };
  }
  return result;
}

var test1 = createFunctions1();
console.log(test1[7]());//每一项都是10


//闭包
function createFunctions2(){
  var result = new Array();
  for(var i = 0; i < 10; i++){
    result[i] = function(num){
      return function(){
      return num;
    };
  }(i);
}
  return result;
}

var test1 = createFunctions2();
console.log(test1[1]());

//匿名函数
console.log(typeof function(){});
console.log((function(x,y){return x+y;})(2,41));


//
