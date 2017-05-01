'use strict';
//Date
var now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());//月份+1
console.log(now.getDate());
console.log(now.getDay());//星期几
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());//以number形式表示的时间戳

//正则表达式
// JavaScript有两种方式创建一个正则表达式：
// 第一种方式是直接通过/正则表达式/写出来，第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象。
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');
console.log(re1); // /ABC\-001/
console.log(re2); // /ABC\-001/

var re = /^\d{3}\-\d{3,8}$/;
//RegExp对象的test()方法用于测试给定的字符串是否符合条件。
console.log(re.test('010-123451')); // true
console.log(re.test('010-1234x')); // false
console.log(re.test('010 12345')); // false
console.log('a b     c'.split(/\s+/));
console.log('a,b, c   , ,,,;; d'.split(/[\s\,]+/));

//提取子字符串
//exec()方法在匹配成功后，会返回一个Array，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。
var re3 = /^(\d{3})-(\d{3,8})$/;
console.log(re3.exec('010-12345')); // ['010-12345', '010', '12345']
console.log(re3.exec('010 12345')); // null
var re4 = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
console.log(re4.exec('19:05:30'));// ['19:05:30', '19', '05', '30']

//贪婪匹配
var re5 = /^(\d+)(0*)$/;
console.log(re5.exec('102300')); // ['102300', '102300', '']
//非贪婪匹配
var re6 = /^(\d+?)(0*)$/;
console.log(re6.exec('102300')); // ['102300', '1023', '00']
