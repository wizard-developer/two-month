// 学习koa 从源码学习

// debug
const debug = require('debug')('koa:application');
const Emitter = require('events');
const compose = require('../koa-compose')
let context = require('./ctx')
let request = require('./request')
let response = require('./response')
const http = require('http');
const Stream = require('stream');
const util = require('util');

// 1. 首先实现一个http服务并且监听一个端口
module.exports = class Application extends Emitter {
  constructor() {
    super();
    this.middlewares = [];
    // 三个模块保存到实例上
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
  }

  // 使用中间件
  use(fn) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
    this.middlewares.push(fn);
    debug('use %s', fn._name || fn.name || '-');
    return this;
  }

  // 创建ctx
  createContext(req, res) {
    const ctx = Object.create(this.context);
    const request = ctx.request = Object.create(this.request);
    const response = ctx.response = Object.create(this.response);
    /**
     *  这地方是个骚操作
     *
     * 方便用户从各种属性上取到他想要的数据
     *
     * example url
     *
     * 1. ctx.req.url
     * 2. ctx.request.req.url
     * 3. ctx.response.req.url
     * 4. ctx.request.url
     * 5. ctx.url
     * ...
     */
    ctx.req = request.req = response.req = req;
    ctx.res = request.res = response.res = res;
    // 把全局的 ctx 在赋值给 request.ctx && response.ctx
    request.ctx = response.ctx = ctx;
    // 再给request 上赋值 response
    request.response = response;
    // 同理
    response.request = request;
    // 然后把 ctx 返回出去
    return ctx;
  }
  
  callback() {
    const fn = compose(this.middlewares)
    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };
    return handleRequest
  }

  //
  handleRequest(ctx, fnMiddleware) {
    //
    const res = ctx.res;
    // 默认404
    res.statusCode = 404;
    // 判断 ctx.body 类型
    // if(typeof ctx.body === 'object') {
    //   res.setHeader('Content-Type', 'application/json;charset=utf-8');
    //   res.end(JSON.stringify(ctx.body));
    // } else if(ctx.body instanceof Stream) {
    //   ctx.body.pipe(res);
    // } else if(typeof ctx.body === 'string' || Buffer.isBuffer(ctx.body)) {
    //   res.setHeader('Content-Type', 'text/html;chartset=utf-8');
    //   res.end(ctx.body);
    // } else {
    //   res.end('Not Found');
    // }
    return fnMiddleware(ctx).then(this.handleRequest);
  }

  onerror(err) {
    if (!(err instanceof Error)) throw new TypeError(util.format('non-error thrown: %j', err));

    if (404 == err.status || err.expose) return;
    if (this.silent) return;

    const msg = err.stack || err.toString();
    console.error();
    console.error(msg.replace(/^/gm, '  '));
    console.error();
  }
  
  // 监听端口
  listen(...args) {
    debug('listen');
    // createServer -> 回调函数 -> 传入原生 req, res
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }
}