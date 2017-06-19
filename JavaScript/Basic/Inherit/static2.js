'use strict';

function SuperType(){
  this.property = true;
}

SuperType.prototype.getSuperValue = function(){
  return true;
}

function SubType(){
  this.subproperty = false;
}

//继承自SuperType
SubType.prototype = new SuperType();

//新方法
SubType.prototype.getSubValue = function (){
    return this.subproperty;
};

console.log(instance.getSuperValue());   //true


//重写已实现方法
SubType.prototype.getSuperValue = function (){
    return false;
};

var instance = new SubType();
console.log(instance.getSuperValue());   //false

//共享
function DOG(name){
　　　　this.name = name;
　　}
　　DOG.prototype = { species : '犬科' };

　　var dogA = new DOG('大毛');
　　var dogB = new DOG('二毛');

　　console.log(dogA.species); // 犬科
　　console.log(dogB.species); // 犬科
