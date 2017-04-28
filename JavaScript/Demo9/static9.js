'use strict';
//递归之奇技淫巧
const f = (a) => {
  if (a === undefined) {
    return 0;
  }
  else {
    return (b) => {
      if (b === undefined) {
        return a;
      }
      return f(a + b)
    }
  }
}
console.log(f());
console.log( f(1)(2)(3)(4)(5)(6)() );
