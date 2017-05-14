const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

app.use(bodyParser()); //解析HTTP请求body的处理函数

app.use(controller()); //add controller

app.listen(3000);

console.log('app started at port 3000...');
