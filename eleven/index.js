const { app, BrowserWindow } = require('electron');


// css -> -webkit-
app.on('ready', () => {
  new BrowserWindow({
    width: 540,
    height: 270,
    frame: false,
    
  })
})