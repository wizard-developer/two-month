let Koa = require('./lib/application')
let app = new Koa()

app.use(ctx => { // 还没写中间件，所以这里还不是ctx和next
  ctx.body = 'Hello World';
  console.log(ctx.body);
})

app.listen(3000)