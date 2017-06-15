'use strict';

//Regular expression

var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
console.log(pattern.test(text));
