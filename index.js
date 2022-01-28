const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 400,
		height: 400,
		autoHideMenuBar: true,
		resizable: false,
		webPreferences: {
			experimentalFeatures: true,
			sandbox: false,
			webSecurity: false,
			allowRunningInsecureContent: true,
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			nodeIntegrationInSubFrames: true,
			contextIsolation: false,
			preload: path.join(__dirname, 'preload.js'),
		},
	});
	win.loadFile('index.html');
};

app.whenReady().then(() => {
	Menu.setApplicationMenu(null);
	app.allowRendererProcessReuse = false;
	createWindow();
});
