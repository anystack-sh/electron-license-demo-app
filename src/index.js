const { app, BrowserWindow } = require('electron');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const Unlock = new (require('@anystack/electron-license'))(
    {
        api: {
            key: '<API-KEY>', // API key with ONLY(!) license:validate and license:activate scope.
            productId: '<PRODUCT-ID>', // Your Anystack product ID
        },
        license: {
            requireEmail: true,
            encryptionKey: '338C1292-9F24-44B8-AC61-B5B06FF3FD83', // This can be any random string.
            checkIn: {
                value: 20,
                unit: "minutes"
            },
            trial: {
                enabled: true,
                value: 7,
                unit: "days",
            },
        },
        prompt: {
            title: "",
            subtitle: "Activate your license to get started",
            logo: "https://anystack.sh/img/logo.png",
            trial: "Try Demo for 7 days",
            trialExpired: "Thank you for trying DDemo. Your trial has expired; to continue, please purchase a license.",
        },
    },
    isProd ? autoUpdater : null
);

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  Unlock.ifAuthorized(mainWindow);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
