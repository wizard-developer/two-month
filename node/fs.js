const fs = require('fs');

// write
// 写入data

// // imput/output => i/o 操作
// fs.writeFile('./data/1.txt', 'hello', err => {
//   if(err) throw new Error(err);
//   console.log('文件写入成功...');
// });


// fs.appendFileSync('./data/1.txt', 'World', err => {
//   if(err) throw new Error(err);
// })

// const content = fs.readFileSync('./data/1.txt');
// console.log(content)


// 递归删除非空文件

function rmdir(dirPath) {
  let files = fs.readdirSync(dirPath);

  files.forEach(file => {
    let filePath = dirPath + '/' + file
    if(fs.statSync(filePath).isDirectory()) {
      rmdir(filePath)
    } else {
      fs.unlinkSync(filePath)
    }
  })
}

// 监听文件改变
// 也可以监听文件夹 -> fs.watch
// fs.watchFile('./data/1.txt', data => {
//   console.log(data, 'changed')
// })

