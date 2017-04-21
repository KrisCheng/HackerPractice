'use strict';
var name = '小明1234';
var age = 20;
var s = 'Hello';

s=name.substring(0,1);

//Array
var arr1 = [1,2,3,4,94,32,324,24,12];
var arr = [[1, 2, 3], [400, 500, 600], '-'];
// alert(arr[1].length);

//Object
var xiaoming = {
    name: '小明',
    birth: 1990,
    'school-name': 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
delete xiaoming.name;
// alert('names' in xiaoming);

// var height = parseFloat(prompt('请输入身高(m):'));
// var weight = parseFloat(prompt('请输入体重(kg):'));
// alert(height);

//loop for-in
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var keys in o) {
    // alert(keys); // 'name', 'age', 'city'
}

var arr2 = ['Bart', 'Lisa', 'Adam'];
for(var key in arr2){
  // alert(key);             //the key
  // alert("Hello "+ arr2[key]);   the value
}

//Map and Set were add in ES6
//Map  key-value
var m = new Map([[95, "test"], ['Bob', 75], ['Tracy', 85]]);
// alert(m.get(95));

//Set
var s = new Set([1, 2, 3, 3]);
// alert(s); // Set {1, 2, 3, "3"}

var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x of a) {
    // alert(x); // '0', '1', '2', 'name'
}

//Function
//匿名函数
// function abs(x) {
//     if (x >= 0) {
//         return x;
//     } else {
//         return -x;
//     }
// }
//将函数定义为对象
var abs1 = function (x) {
  if (typeof x !== 'number') {
        throw 'Not a number！！';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
// alert(abs1(1)); //多余参数没有关系

//arguments
function abs2() {
    return arguments.length;
}
// alert(abs2(1,2,3));

//rest ES6
function sum(...rest) {
  if (typeof rest[0] !== 'number') {
        throw 'Not a number！！';
    }
    var sum = 0;
    for (var i = 0; i<rest.length; i++) {
              sum += rest[i];
            }
    console.log(sum);
}
sum(1, 2, 3, 4, 5 ,123);
sum(1);

//圆的面积
function area_of_circle(r, pi) {
  if(r !== undefined && pi !== undefined){
  return r*r*pi;
  }
  else if (r !== undefined){
  return r*r*3.14;
  }
  return 0;
}
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    // alert('测试通过');
} else {
    // alert('测试失败');
}

//Nested 从自身函数定义开始，从“内”向“外”查找
function foo1() {
    var x = 1;
    function bar() {
        var x = 'A';
        alert('x in bar() = ' + x); // 'A'
    }
    alert('x in foo() = ' + x); // 1
    bar();
}
// foo1();

//在函数内部首先申明所有变量
function foo2() {
    var y; // 提升变量y的申明
    var x = 'Hello, ' + y;
    alert(x);
    y = 'Bob';
}
// foo2();

// var course = 'Learn JavaScript';
// window.alert(course); // 'Learn JavaScript'
// alert(window.course); // 'Learn JavaScript'

function foo3() {
    var sum = 0;
    for (var i=0; i<100; i++) {
        sum += i;
    }
    i += 1; // SyntaxError
    console.log(i);
}
// foo3();

//method
var xiaoming2 = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

// alert(xiaoming2.age); // function xiaoming2.age()
// alert(xiaoming2.age());

//this
var xiaoming3 = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

// xiaoming3.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined

var xiaoming4 = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

console.log(xiaoming4.age());

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming5 = {
    name: '小明',
    birth: 1990,
    age: getAge
};
console.log(xiaoming5.age());
console.log(getAge.apply(xiaoming, []));

//Higher-order function
var f = Math.abs;
function add(x, y, f) {
    return f(x) + f(y);
}
console.log(add(-5, 6, Math.abs));

//map && reduce
var arr3 = [1, 3, 5, 7, 9];
var k = arr3.reduce(function (x, y) {
    return x + y;
});
console.log(k);

function string2int(s) {
  var arr = s.split('');
  return arr;
var sum = arr.reduce(function (x, y) {
    return x * 10 + y;
});
return sum;
}
console.log(string2int('12345'));
