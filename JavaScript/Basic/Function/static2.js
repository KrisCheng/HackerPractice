'use strict';

// apply && call

function fruits(){}

fruits.prototype = {
  color: "red",
  say: function() {
    console.log("My color is " + this.color);
  }
}
var apple = new fruits;

apple.say();

var banana = {
  color: "yellow"
}

apple.say.call(banana);
apple.say.apply(banana);

//重写console.log
function log(){
  console.log.apply(console, arguments);
};
log(1,2,32,13);


//仿块级作用域
function testFunction(count){
  (function(){
    for(var i = 0; i < count; i++){
      console.log(i);
    }
  })();
  // console.log(i);  报错
}
testFunction(10);
