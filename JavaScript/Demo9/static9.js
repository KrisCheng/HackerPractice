'use strict';
function f(x){
if(undefined === x){
  return 0;
}
return x + function g(x){
  return f(x-1);
}
}
console.log(f());
console.log( f(1)(2)(3)(4)(5)() );
