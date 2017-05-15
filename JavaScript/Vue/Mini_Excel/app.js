const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const rest = require('./rest')

const app = new Koa();


app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method}: ${ctx.request.url}...`);
  var start = new Date().getTime(),
      execTime;
  await next();
  execTime = new Date().getTime() - start;
  ctx.response.set('X-Response-Time', `${execTime}ms`);
});

let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static' ));

app.use(async (ctx, next) => {
  if(ctx.request.path === '/') {
    ctx.response.redirect('/static/index.html');
  }else{
    await next();
  }
});

app.use(bodyParser());

app.use(rest.restify());

app.use(controller());

app.listen(3000);
console.log('app start at port 3000...')
