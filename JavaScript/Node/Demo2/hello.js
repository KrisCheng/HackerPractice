//export
'use strict';
var s = 'Hello';
function greet(name){
  console.log(s + ', ' + name + '!');
}

function add(n1, n2){
  console.log(n1 + n2);
}
module.exports = {
  greets: greet,
  adds: add
};
