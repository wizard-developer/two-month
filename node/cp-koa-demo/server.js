const Koa = require('../cp-koa');
const app = new Koa();

app.listen('3000', () => {
  console.log('good');
})