'use strict';

// Ajax Get

var xhr = new XMLHttpRequest();
xhr.open("get", "example.txt", false);
xhr.send(null);

if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
  console.log(xhr.statusText);
  console.log(xhr.responseText);
  console.log(xhr.status);
} else {
  alert("Request was unsuccessful: " + xhr.status);
}
