// electron-main.cjs
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Check if running in development mode
const isDev = process.env.NODE_ENV === 'development';

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Determine which URL to load
  const port = process.argv[2] || '5175';
  
  if (isDev) {
    // Load from dev server
    mainWindow.loadURL(`http://localhost:${port}`);
    // Open DevTools
    mainWindow.webContents.openDevTools();
    console.log(`Loading from http://localhost:${port}`);
  } else {
    // Load from built files
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }

  // Handle window closed event
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create window when app is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Re-create window on macOS when dock icon is clicked
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});