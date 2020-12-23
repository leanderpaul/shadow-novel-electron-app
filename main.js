"use strict";
exports.__esModule = true;
/**
 * Importing npm packages.
 */
var electron_1 = require("electron");
/**
 * Importing user defined packages.
 */
/**
 * Importing and defining types.
 */
/**
 * Declaring the constants.
 */
var isProd = electron_1.app.isPackaged;
/**
 * Function to create the chromium window.
 */
function createWindow() {
    var window = new electron_1.BrowserWindow({ fullscreen: true, webPreferences: { nodeIntegration: true } });
    if (isProd)
        window.loadFile('./client/index.html');
    else
        window.loadURL('http://localhost:3000');
    window.webContents.openDevTools();
}
/**
 * Function to handle application close.
 */
function closeWindow() {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
}
/**
 * Function to handle activate application.
 */
function activateWindow() {
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        createWindow();
}
/**
 * Setting up the listeners.
 */
electron_1.app.whenReady().then(createWindow);
electron_1.app.on('window-all-closed', closeWindow);
electron_1.app.on('activate', activateWindow);
