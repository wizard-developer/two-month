const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: '请输入你的应用名称',
    default: 'app'
  },
  {
    type: 'confirm',
    name: 'isEs6',
    message: '是否选用es6+',
    default: 'Yes'
  },
  {
    type: 'list',
    name: 'framework',
    message: '请选择框架',
    choices: ['Vue', 'React', 'Angular'],
    default: 1
  },
  {
    type: 'rawlist',
    name: 'isCheck',
    message: '请在一次选择框架',
    choices: ['Vue', 'React', 'Angular'],
    default: 1
  },
  {
    type: 'checkbox',
    name: 'tools',
    message: '开发工具',
    choices: [
      {
        name: 'Eslint',
        value: 'eslint',
        checked: true
      },
      {
        name: 'Mocha',
        value: 'mocha'
      },
      {
        name: 'Router',
        value: 'router'
      }
    ]
  }
]).then(answer => {
  console.log(answer)
})