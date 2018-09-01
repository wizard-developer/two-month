const fs = require('fs');
// console.log(process.argv);

// if(process.argv.includes('-vvvv')) {
//   console.log('厉害了');
// };


// if(process.env.mode === 'dev') {
//   console.log('开发环境')
// } else {
//   console.log('生产环境')
// }

// let i=0;
// setInterval(() => {
//   i++;
//   console.log(i)
//   if(i > 10) {
//     process.exit();
//   }
// }, 1000)

// 流的操作
// process.stdout.write('Hello')
// process.stdin.on('data', e => {
//   console.log('用户输入的是:', e.toString());
//   fs.mkdirSync(e.toString().replace('/n', ''));
//   console.log('创建文件夹成功...')
// })

console.log(process.arch)
