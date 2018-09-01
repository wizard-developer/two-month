/*
 * @moduleName: global
 * @Desc:nodejs global对象
 * @Author: djkloop
 * @Date: 2018-08-30 14:45:29
 * @Last Modified by: djkloop
 * @Last Modified time: 2018-09-01 00:36:44
 */

 /**
  * 当我们导入的模块名称是一个文件夹的时候
  * 1、读取改文件夹下的package.json
  * 2. 导入package.json文件main字段的文件名称
  * 3. 如果不存在package或者man字段 则默认加载index.js
  */
let m1 = require('./module');

//  console.groupCollapsed('这里面有东西被折叠了a')
//   console.groupCollapsed('这里面也有东西被折叠了')
//     console.log('good')
//  console.groupEnd('这里面有东西被折叠了a')

 // __dirname -> 当前目录
//  console.log(__dirname + '/fuck.js');
 // __filename -> 当前文件
//  console.log(__filename);

// Event Loop
// 如果碰见异步 优先处理 setTimeout/setInterval
// i/0

// console.log(1)

// setTimeout(function() {
//   setTimeout(function () {
//     console.log(4);
//   }, 0);
//   console.log(3);
// }, 1000)

// setTimeout(function() {
//   setTimeout(function () {
//     console.log(6);
//   }, 0);
//   console.log(5);
// }, 1000)

// console.log(2)

// setTimeout(() => {
//   new Promise(resolve => {
//     console.log('promise')
//     resolve()
//   }).then(() => {
//     console.log('then')
//   })
//   setTimeout(() => {
//     console.log('setTimeout')
//   }, 1000)
// }, 1000)


