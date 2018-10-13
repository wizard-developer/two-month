const Koa = require('../cp-koa');
const app = new Koa();

app.use(ctx => {
  console.log(ctx)
})

app.listen('3000', () => {
  console.log('good');
})