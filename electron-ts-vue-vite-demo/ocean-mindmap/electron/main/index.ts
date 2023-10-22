/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-21 22:51:59
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-21 23:24:27
 * @FilePath: /ocean-mindmap-old/ocean-mindmap/electron/main/index.ts
 * @Description: 注释信息
 */
import { app, BrowserWindow } from "electron"
import { join } from "path"
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: join(__dirname, "../preload/index.js")
        }
    })

    // 判断当前环境是否为开发环境
    if (process.env.NODE_ENV === "development") {
        // 当处于开发环境时，页面加载本地服务，并自动打开开发者工具
        mainWindow.loadURL("http://localhost:5173");
        mainWindow.webContents.openDevTools();
    } else {
        // 否则页面加载打包后的index.html文件
        mainWindow.loadFile(join(__dirname, "../index.html"));
    }

}

app.whenReady().then(() => {
    createWindow()
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})