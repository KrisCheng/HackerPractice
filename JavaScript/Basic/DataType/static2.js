'use strict';
function varvslet() {
  console.log(i); // i 是 undefined 的，因为变量提升
  // console.log(j); // ReferenceError: j 没有被定义

  for( var i = 0; i < 3; i++ ) {
    console.log(i); // 0, 1, 2
  };

  console.log(i); // 3
  // console.log(j); // ReferenceError: j 没有被定义

  for( let j = 0; j < 3; j++ ) {
    console.log(j);
  };

  console.log(i); // 3
  // console.log(j); // ReferenceError: j 没有被定义
}
varvslet();
