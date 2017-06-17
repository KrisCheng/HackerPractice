'use strict';

// prototype
//实例属性 && 原型属性

function Person(){
}

Person.prototype.name = "Kris";
Person.prototype.age = 22;
Person.prototype.job = "Front-end Engineer";
Person.prototype.sayName = function(){
  console.log(this.name);
}

var person1 = new Person();

//添加同名属性只会阻止我们访问原型中的那个属性，但不会修改那个属性
person1.name = "Chan";
console.log(person1.name); //Chan
delete person1.name;
console.log(person1.name); //Kris

function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}

console.log(hasPrototypeProperty(person1, "name")); //true

person1.name = "Chan";
console.log(hasPrototypeProperty(person1, "name")); //falses

console.log(person1.hasOwnProperty("name")); //true
delete person1.name;
console.log(person1.hasOwnProperty("name")); //false
