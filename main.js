'use strict';
 
var app = require('app');
var BrowserWindow = require('browser-window');
 
require('crash-reporter').start();
 
var mainWindow = null;
 
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});
 
app.on('ready', function() {
 
    // Windowサイズの指定
    mainWindow = new BrowserWindow({width: 800, height: 600});
    // 初期ロードのファイル
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
 
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

// console.log('Hello, Electron!');