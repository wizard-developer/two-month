const commander = require('commander');
const process = require('process');

// 设置当前命令的版本信息
commander.version('1.0.0', '-v, --version');

// 设置其他option
commander.option('-n, --name [val]', '本命令行的name', 'djkloop')

commander.action(() => {
  console.log('Hello ' + commander.name)
})
// 解析process.args
commander.parse(process.argv);