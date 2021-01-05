// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

require('electron-reload')(__dirname);

let mainWindow;

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 720,
		minWidth: 1024,
		minHeight: 720,
		webviewTag: true,
		transparent: true, 
		frame: false,
		titleBarStyle: 'hiddenInset',
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			webviewTag: true,
		},
		icon: path.join(__dirname, './assets/Icon@1x.png'),
	})

	// Prevent closing, hide window instead
	mainWindow.on('close', (event) => {
		if (app.quitting) {
			mainWindow = null;
		} else {
			event.preventDefault();
			mainWindow.hide();
		}
	})

	// Load index.html
	mainWindow.loadFile('index.html')
}

// Initialization
// ---------------------------------------------------------------------------
app.whenReady().then(() => {
	createWindow();	
})

// Activation
// ---------------------------------------------------------------------------
app.on('activate', () => {
	mainWindow.show();	
})

// Quit
// ---------------------------------------------------------------------------
app.on('before-quit', () => {
	app.quitting = true;
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})
