'use strict';
//闭包面试题

//错误的结果
// var fnArray = [];
// for(var i = 0; i < 3; i++){
//   fnArray[i] = function(){
//     console.log("the value: " + i);
//   };
// }
// for(var j = 0; j < 3; j++){
//   fnArray[j]();
// }

//正确的结果
var fnArray = [];
for(var i = 0; i < 3; i++){
  fnArray[i] = (function(k){
    return function(){
    console.log("the value: " + k);
  };
})(i);
}
for(var j = 0; j < 3; j++){
  fnArray[j]();
}
