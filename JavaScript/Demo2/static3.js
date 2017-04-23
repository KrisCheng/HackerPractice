'use strict';
//JSON
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
console.log(JSON.stringify(xiaoming)); // '{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}'
console.log(JSON.stringify(xiaoming, null, ' ')); //输出好看一点
console.log(JSON.stringify(xiaoming, ['name', 'skills'], ' '));//指定输出

var f1 = function(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
console.log(JSON.stringify(xiaoming, f1, ' '));//传入函数
console.log(typeof xiaoming);
