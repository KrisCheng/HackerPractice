'use strict';

//Object
var person = new Object()
person.name = "Kris";
person.age = 22;
person.job = "Front-end Engineer";

person.sayName = function(){
  console.log(this.name);
}

person.sayName();

//A better way
var anotherperson = {
  name: "Chan",
  age: 22,
  job: "Front-end Engineer",
  sayName: function(){
    console.log(this.name)
  }
};
anotherperson.sayName();

//使用工厂模式创建对象
function createPerson(name, age, job){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function(){
    console.log(this.name);
  }
  return o;
}
var person1 = createPerson("阿呆", 23, "打杂");
person1.sayName();

//构造函数模式创建对象
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}

function sayName(){
    console.log(this.name);
}
var person2 = new Person("阿美", 23, "扫地");
person2.sayName();
console.log(person2.constructor === Person); //true
console.log(person2 instanceof Person); //true
