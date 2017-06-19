'use strict';

// this对象
var name  = "The Window";

var object = {
  name: "My Object",
  getNameFunc: function(){
    // var that = this
    // return function(){
    //   return that.name;
    // };
    return this.name;
  }
};

console.log(object.getNameFunc());
// console.log((object.getNameFunc = object.getNameFunc)());
