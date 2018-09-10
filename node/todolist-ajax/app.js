const koa = require('koa');
const StaticCache = require('koa-static-cache');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');

const app = new koa();
app.use(StaticCache(__dirname + '/static', {
  prefix: '/static',
  gzip: true
}));

app.use(BodyParser());

let datas = {
  todos: [
    {
      title: '学习node',
      id: 1,
      done: true
    },
    {
      title: '学习koa',
      id: 2,
      done: false
    },
    {
      title: '学习mysql',
      id: 3,
      done: false
    }
  ]
}

const router = new Router()
router.get('/todolist', async ctx => {
  ctx.body = {
    code: 200,
    message: '请求成功',
    result: datas.todos
  };
})

router.post('/toggle', async ctx => {
  let id = ctx.request.body.id || 0;
  if(!id) {
    ctx.body = {
      code: 1,
      data: '缺少参数'
    }
  } else {
    let todo = datas.todos.find(todo => todo.id === id);
    todo.done = !todo.done
    ctx.body = {
      code: 0,
      message: '修改成功',
      result: datas.todos
    }
  }
})

app.use(router.routes())

app.listen(9999)