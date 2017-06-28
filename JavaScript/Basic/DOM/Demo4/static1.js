'use strict';

// DOM2 DOM3
var myDiv = document.getElementsByClassName("myDiv")[0];
console.log(myDiv);
var computedStyle = document.defaultView.getComputedStyle(myDiv, null);
console.log(computedStyle.backgroundColor);
console.log(computedStyle.width);
console.log(computedStyle.border);

//遍历
var div = document.getElementById("div1");
var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, null, false);
var node = iterator.nextNode();
while(node !== null){
  console.log(node.tagName);
  node = iterator.nextNode();
}
