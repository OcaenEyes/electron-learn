/*
 * @Descripttion:
 * @version: V0.0.1
 * @Author: OCEAN.GZY
 * @Date: 2022-07-16 00:03:46
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 22:31:10
 */
import { app, protocol, BrowserWindow, ipcMain, MenuItemConstructorOptions, dialog, shell, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import path from 'path'
// import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const template: Array<MenuItemConstructorOptions> = [
  {
    label: '文件',
    submenu: [
      {
        label: '打开文件',
        accelerator: 'CmdOrCtrl+O',
        click: () => {
          dialog.showOpenDialog(
            {
              title: '打开文件',
              defaultPath: '',
              properties: ['openFile'],
              filters: [{ name: 'Markdown', extensions: ['md'] }]
            }
          )
        }
      },
      {
        label: '保存文件',
        accelerator: 'CmdOrCtrl+S',
        click: () => {
          dialog.showSaveDialog(
            {
              title: '文件保存为'
            }
          )
        }
      },
      {
        label: '文件另存为',
        accelerator: 'Shift+CmdOrCtrl+S',
        click: () => {
          dialog.showSaveDialog(
            {
              title: '文件另存为'
            }
          )
        }
      },
      { type: 'separator' },
      { label: '退出', accelerator: 'CmdOrCtrl+Q', role: 'quit' }]
  },
  {
    label: '编辑',
    submenu: [
      { label: '撤销', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
      { label: '重做', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
      { type: 'separator' },
      { label: '剪切', accelerator: 'CmdOrCtrl+X', role: 'cut' },
      { label: '复制', accelerator: 'CmdOrCtrl+C', role: 'copy' },
      { label: '粘贴', accelerator: 'CmdOrCtrl+V', role: 'paste' }
    ]
  },
  { label: '关于', submenu: [{ label: '关于作者', click: () => { shell.openExternal('http://oceaneyes.top') } }] }
]
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
let win: any = null
async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    useContentSize: true,
    width: 1220,
    height: 640,
    minWidth: 1220,
    minHeight: 640,
    // transparent: true, //窗口透明  设置后还原窗口win.restore()无效
    // backgroundColor: '#000', //背景颜色
    title: 'Ocean Note', // 标题
    movable: true,
    webPreferences: {
      // Required for Spectron testing
      // enableRemoteModule: !!process.env.IS_TEST,
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env
        .ELECTRON_NODE_INTEGRATION as unknown as boolean,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      webSecurity: false
    }
  })
  if (process.env.NODE_ENV === 'production') {
    // 正式
    createProtocol('app')
    win.loadURL('app://./index.html') // Load the index.html when not in development
    // win.webContents.openDevTools()
  } else {
    // 开发
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  }
  // 当应用所有窗口关闭要做的事情
  win.on('closed', () => {
    win = null
  })
}
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  // 外网 加载慢 去掉
  //   if (isDevelopment && !process.env.IS_TEST) {
  //     // Install Vue Devtools
  //     try {
  //       await installExtension(VUEJS3_DEVTOOLS)
  //     } catch (e) {
  //       console.error('Vue Devtools failed to install:', e.toString())
  //     }
  //   }
  if (win === null) createWindow()
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
})
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
