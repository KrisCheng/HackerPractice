'use strict';
var message = "Hello World";
var gg = null;
var s = .1;
function text(){

}
console.log((typeof(message)));
console.log(typeof 95);
console.log(typeof true);
console.log(typeof gg);

console.log(undefined == null);  //true
console.log(undefined === null); //false
console.log(Boolean(s));
console.log(s);

var a = 0.15,
    b = 0.15;
console.log(undefined == NaN)


// isNaN
console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN("10"));
console.log(isNaN("hello"));
console.log(isNaN(true));

console.log(parseFloat(12323.23e10));
console.log(('12345' * 1 === 12345));

//property
var person = new Object();
person.name = "Kris";
console.log(person.name); //Kris

var name = "Kris";
name.age = 23;
// console.log(name.age); //报错
