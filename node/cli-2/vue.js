const commander = require('commander');
const process = require('process');
const fs = require('fs');

// 设置当前命令的版本信息
commander.version('1.0.0', '-v, --version');

// create
let createCommander = commander.command('create <app-name>')
.description('创建项目').alias('c').usage('create <app-name> \n\n  create a new project powered by vue-cli-service').action(name => {
  fs.mkdirSync(name);
});
// 解析process.args
commander.parse(process.argv);

