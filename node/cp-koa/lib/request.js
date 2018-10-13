const url = require('url');

// 拓展ctx上的方法
module.exports = {
  get url() {
    return this.req.url;
  },
  get path() {
    return url.parse(this.req.url).pathname;
  },
  get query() {
    return url.parse(this.req.url).query
  }
};