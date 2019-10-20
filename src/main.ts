import {app, BrowserWindow} from 'electron';

import * as config from "./config/config.json";
import {Utility} from "./util/utility"
import {MainConstants} from './main.constants';
import {EventsContants} from "./events.contants";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow(config);

    mainWindow.loadURL(MainConstants.WEB_ENDPOINT);

    if (Utility.isDevelopment()) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on(EventsContants.CLOSED, () => {
        mainWindow = null;
    })
}


app.on(EventsContants.READY, createWindow);

app.on(EventsContants.WINDOW_ALL_CLOSED, () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on(EventsContants.ACTIVATE, () => {
    if (mainWindow === null) {
        createWindow()
    }
});
