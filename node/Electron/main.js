const {app, BrowserWindow, Menu, MenuItem} = require('electron');

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height: 600, resizable: false, title: '天天爱学习'});
})