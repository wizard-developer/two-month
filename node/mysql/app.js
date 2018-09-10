(async function() {
  const koa = require('koa');
  const Static = require('koa-static-cache');
  const Router = require('koa-router');
  const mysql = require('mysql2/promise')

  const app = new koa();
  const router = new Router();
  const connection = await new mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'mtables'
  });

  app.use(Static('./static', {
    prefix: '/static',
    gzip: true
  }));


  router.get('/todos', async ctx => {
    const todos = await connection.query('select * from Todos');
    ctx.body = {
      res: todos
    }
  });

  app.use(router.routes());


  app.listen(9999);
})()