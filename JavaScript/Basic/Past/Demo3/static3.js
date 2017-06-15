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
console.log(JSON.stringify(xiaoming, null, ' ')); //格式化输出
console.log(JSON.stringify(xiaoming, ['name', 'skills'], ' '));//指定输出

var f1 = function(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
console.log(JSON.stringify(xiaoming, f1, ' '));//传入函数
console.log(typeof xiaoming);

//OOP
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming2 = {
    name: '小明11'
};
var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};
xiaoming2.__proto__ = Bird;//此类赋值慎用
xiaoming2.fly();

// 原型对象:
var Student2 = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student2原型创建一个新对象:
    var s = Object.create(Student2);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming3 = createStudent('小明');
xiaoming3.run(); // 小明 is running...
console.log(xiaoming3.__proto__ === Student2); // true

//构造函数
function Student3(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}
var xiaoming4 = new Student3('小明');
console.log(xiaoming4.name); // '小明'
xiaoming4.hello(); // Hello, 小明!
console.log(xiaoming4.constructor === Student3.prototype.constructor);
console.log(Student3.prototype.constructor === Student3);
console.log(Object.getPrototypeOf(xiaoming4) === Student3.prototype);
console.log(xiaoming4 instanceof Student3);
var xiaohong = new Student3('小红');
console.log(xiaoming4.hello === xiaohong.hello);
