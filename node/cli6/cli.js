const commander = require('commander');
const subCommander = commander.command('create <app>');

subCommander.action(() => {
  console.log(commander.a);
})