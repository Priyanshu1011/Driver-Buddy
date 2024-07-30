// Imports
const {
  app,
  BrowserWindow,
  Notification,
  nativeImage,
} = require("electron/main");
const path = require("path");
const url = require("url");

// Global variables
const NOTIFICATION_TITLE = "Secure Copilot started successfully";
const NOTIFICATION_BODY = "Secure Copilot application is up and running!";
const appIconPath = path.join(__dirname, "assets/images/logo-circle.png");
const appIcon = nativeImage.createFromPath(appIconPath);

function showNotification() {
  new Notification({
    title: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY,
  }).show();
}

let win;

function createWindow() {
  // Initializes the application window
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    show: false,
    icon: appIcon,
  });

  // Loads the application's content
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "pages/home/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  // Displays the application window after it's loaded
  win.once("ready-to-show", () => {
    win.show();
  });

  showNotification();

  win.on("closed", () => {
    win = null;
  });
}

// Driver function
const driver = () => {
  createWindow();
};

// Calls the driver function when the app is ready to be launched
app.whenReady().then(() => {
  driver();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Cross-platform differences
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
