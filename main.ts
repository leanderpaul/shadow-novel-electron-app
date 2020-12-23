/**
 * Importing npm packages.
 */
import { app, BrowserWindow, nativeTheme } from 'electron';

/**
 * Importing user defined packages.
 */

/**
 * Importing and defining types.
 */

/**
 * Declaring the constants.
 */
const isProd = app.isPackaged;
nativeTheme.themeSource = 'dark';

/**
 * Function to create the chromium window.
 */
function createWindow() {
  const window = new BrowserWindow({ width: 1000, height: 500, webPreferences: { nodeIntegration: true } });
  if (isProd) window.loadFile('./client/index.html');
  else window.loadURL('http://localhost:3000');
  window.webContents.openDevTools();
}

/**
 * Function to handle application close.
 */
function closeWindow() {
  if (process.platform !== 'darwin') app.quit();
}

/**
 * Function to handle activate application.
 */
function activateWindow() {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
}

/**
 * Setting up the listeners.
 */
app.whenReady().then(createWindow);
app.on('window-all-closed', closeWindow);
app.on('activate', activateWindow);
