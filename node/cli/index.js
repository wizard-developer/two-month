const fs = require('fs');

let appName = process.argv[2] === void 0 ? 'app' : process.argv[2];
let appRoot = __dirname + '/' + appName
const appRootImage = appRoot + '/images'
const appRootCss = appRoot + '/css'
const appRootJavaScript = appRoot + '/js'
if(fs.existsSync(appRoot)) {
  console.log('文件夹重复存在...')
  process.exit();
}
fs.mkdirSync(appRoot)
fs.mkdirSync(appRootImage)
fs.mkdirSync(appRootCss)
fs.mkdirSync(appRootJavaScript)

// 判断是否存在需要创建index.html
if(process.argv.includes('-i')) {
  fs.writeFileSync(appRoot + '/index.html',`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>文件创建成功...</h1>
  </body>
  </html>
  `)
}

console.log('创建项目成功');