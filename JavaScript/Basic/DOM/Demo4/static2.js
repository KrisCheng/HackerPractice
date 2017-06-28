'use strict';

// DOM2 DOM3

console.log(document.implementation.hasFeature("Core","2.0"));

var div1 = document.createElement("div");
div1.setAttribute("class", "box");

var div2 = document.createElement("div");
div2.setAttribute("class", "box");

console.log(div1.isSameNode(div1));
console.log(div1.isEqualNode(div2));
console.log(div1.isSameNode(div2));
