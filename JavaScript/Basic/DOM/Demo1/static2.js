'use strict';

var div = document.getElementById("mydiv");
var test = document.getElementById("test");
console.log(test);
console.log(div.tagName === div.nodeName);

var comment = div.firstChild;
console.log(comment.data);

function outputAttribute(element){
  var pairs = new Array(),
      attrName,
      attrValue,
      i,
      len;

  for(i = 0, len = element.attributes.length; i < len; i++){
    attrName = element.attributes[i].nodeName;
    attrValue = element.attributes[i].nodeValue;
    pairs.push(attrName + "=\"" + attrValue + "\"");
  }
  return pairs.join(" ");
}
console.log(outputAttribute(test));


//创建并添加一个节点
var element = document.createElement("div");
element.className = 'message';
var textNode = document.createTextNode("Hello World!");
element.appendChild(textNode);
document.body.appendChild(element);
