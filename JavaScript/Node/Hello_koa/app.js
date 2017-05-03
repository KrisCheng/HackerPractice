//koa Demo

//导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const router = require('koa-router')();//括号为函数调用

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();// 调用下一个middleware
});

//add url-router:
router.get('/hello/:name', async(ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async(ctx, next) => {
  ctx.response.body = `<h1>Index</h1>`;
});

//add router middleware
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
