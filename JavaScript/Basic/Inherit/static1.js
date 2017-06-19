'use strict';

//原型链继承
function SuperType(){
  this.property = true;
}

SuperType.prototype.getSuperValue = function(){
  return this.property;
}

function SubType(){
  this.subproperty = false;
}

//SubType继承SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
  return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue());      //true
console.log(instance instanceof Object);    //true
console.log(instance instanceof SuperType); //true
console.log(instance instanceof SubType);   //true

console.log(Object.prototype.isPrototypeOf(instance));    //true
console.log(SuperType.prototype.isPrototypeOf(instance)); //true
console.log(SubType.prototype.isPrototypeOf(instance));   //true
