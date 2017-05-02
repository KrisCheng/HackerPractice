'use strict';

//导入http模块
var http = require('http');

//创建http server，并传回回调函数
var server = http.createServer(function (request, response) {
  console.log(request.method + ': ' + request.url );
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello World!</h1>');
});

 //让服务器监听8080端口
 server.listen(8080);

 console.log('Server is running at http://127.0.0.1:8080');
