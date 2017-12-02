"use strict";
//create file in main directory
const {app, BrowserWindow} = require('electron');

let win = null;

app.on('ready', function() {
  // change window to specified dimensions
  win = new BrowserWindow({width: 1000, height:600});

  // specific entry point
  win.loadURL("http://localhost:4000");

  // remove before distributing
  win.webContnets.openDevTools();


  //remove window once closed

  win.on('closed', function() {
    win = null;
  });
});


app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
