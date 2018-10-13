/**
 *  这四个库都相对来说比较简单
 * 有时间分析下第三个库
 */
const createError = require('http-errors');
const httpAssert = require('http-assert');
const delegate = require('delegates');
const statuses = require('statuses');

const proto = module.exports= {
  get status() {
      return this.response.status;
  },
  set status(statusCode) {
      this.response.status = statusCode;
  },
  onerror(err) {
    
  }
};


function defineGetter(prop, name) {
  proto.__defineGetter__(name, function() {
    return this[prop][name];
  });
}

function defineSetter(prop, name) {
  proto.__defineSetter__(name, function(val){ // 用__defineSetter__方法设置值
      this[prop][name] = val
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')
defineSetter('response', 'body')

module.exports = proto;

// delegate(proto, 'response')
//   .method('attachment')
//   .method('redirect')
//   .method('remove')
//   .method('vary')
//   .method('set')
//   .method('append')
//   .access('status')
//   .access('message')
//   .access('body')
//   .access('length')
//   .access('type')
//   .access('lastModified')
//   .access('etag')
//   .getter('headerSent')
//   .getter('writable');

/**
 * Request delegation.
 */

// delegate(proto, 'request')
//   .method('acceptsLanguages')
//   .method('acceptsEncodings')
//   .method('acceptsCharsets')
//   .method('accepts')
//   .method('get')
//   .method('is')
//   .access('querystring')
//   .access('idempotent')
//   .access('socket')
//   .access('search')
//   .access('method')
//   .access('query')
//   .access('path')
//   .access('url')
//   .getter('origin')
//   .getter('href')
//   .getter('subdomains')
//   .getter('protocol')
//   .getter('host')
//   .getter('hostname')
//   .getter('header')
//   .getter('headers')
//   .getter('secure')
//   .getter('stale')
//   .getter('fresh')
//   .getter('ips')
//   .getter('ip');