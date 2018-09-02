const commander = require('commander');
const process = require('process');
const fs = require('fs');
const {format} =require('date-fns');
const chalk = require('chalk');
const inquirer = require('inquirer');
const log = console.log;
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// 设置当前命令的版本信息
commander.version('1.0.0', '-v, --version');

// -p
commander.option('-p, --path [path]', '设置显示的目录', __dirname);

// 以列表的形式显示, 不就瘦用的纸
commander.option('-l, --list [path]', '以列表的形式显示');

commander.action(() => {

  try {
    const files = fs.readdirSync(commander.path);
    if(commander.list) {
      let out = files.map(file => {
        let stat = fs.statSync(commander.path + '/' + file);
        let type = stat.isDirectory() ? chalk.red('目录') : chalk.cyan('文件');
        let ctime = format(new Date(stat.ctime), 'YYYY-MM-DD');
        let mtime = format(new Date(stat.mtime), 'YYYY-MM-DD');
        return `[ ${type} ] 文件名: ${file}   更新时间: ${mtime}   创建时间: ${ctime}\r\n`;
      }).join('');
      console.log(out)
    } else {
      console.log(files)
    }
  } catch (error) {
    console.log(error)
  }
})

// 解析process.args
commander.parse(process.argv);

