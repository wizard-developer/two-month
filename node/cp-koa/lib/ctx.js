/**
 *  这四个库都相对来说比较简单
 * 有时间分析下第三个库
 */
const createError = require('http-errors');
const httpAssert = require('http-assert');
const delegate = require('delegates');
const statuses = require('statuses');

const proto = module.exports = {
  inspect() {
    return this.toJSON()
  },

  toJSON() {
    return {
      request: this.request.toJSON(),
      response: this.response.toJSON(),
      app: this.app.toJSON(),
      originalUrl: this.originalUrl,
      req: `<original node req>`,
      res: `<original node res>`,
      socket:`<original node socket>`
    };
  },

  assert: httpAssert,

  throw() {
    throw createError.apply(null, arguments);
  },

  onerror(err) {
    if(null == err)  return;
    if (!(err instanceof Error)) err = new Error(`non-error thrown: ${err}`);
    // delegate
    this.app.emit('error', err, this);
    // nothing we can do here other
    // than delegate to the app-level
    // handler and log.
    if (this.headerSent || !this.writable) {
      err.headerSent = true;
      return;
    }
    // unset all headers
    this.res._headers = {};
    // force text/plain
    this.type = 'text';
    // ENOENT support
    if ('ENOENT' == err.code) err.status = 404;
    // default to 500
    if ('number' != typeof err.status || !statuses[err.status]) err.status = 500;
    // respond
    const code = statuses[err.status];
    const msg = err.expose ? err.message : code;
    this.status = err.status;
    this.length = Buffer.byteLength(msg);
    this.res.end(msg);
  }
}

delegate(proto, 'response')
  .method('attachment')
  .method('redirect')
  .method('remove')
  .method('vary')
  .method('set')
  .method('append')
  .access('status')
  .access('message')
  .access('body')
  .access('length')
  .access('type')
  .access('lastModified')
  .access('etag')
  .getter('headerSent')
  .getter('writable');

/**
 * Request delegation.
 */

delegate(proto, 'request')
  .method('acceptsLanguages')
  .method('acceptsEncodings')
  .method('acceptsCharsets')
  .method('accepts')
  .method('get')
  .method('is')
  .access('querystring')
  .access('idempotent')
  .access('socket')
  .access('search')
  .access('method')
  .access('query')
  .access('path')
  .access('url')
  .getter('origin')
  .getter('href')
  .getter('subdomains')
  .getter('protocol')
  .getter('host')
  .getter('hostname')
  .getter('header')
  .getter('headers')
  .getter('secure')
  .getter('stale')
  .getter('fresh')
  .getter('ips')
  .getter('ip');