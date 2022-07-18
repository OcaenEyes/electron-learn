/*
 * @Descripttion:
 * @version: V0.0.1
 * @Author: OCEAN.GZY
 * @Date: 2022-07-16 00:03:46
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-18 13:47:06
 */
import { app, protocol, BrowserWindow, ipcMain, MenuItemConstructorOptions, dialog, shell, Menu, globalShortcut } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import fs from 'fs'
import path from 'path'
// import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
let openedFile = ''
let openFromProtocolUrl = ''
// 主线程
ipcMain.on('saveContent', (event, content) => {
  if (openedFile.length > 0) {
    try {
      fs.writeFileSync(openedFile, content)
      console.log('保存成功')
    } catch (error) {
      console.log('保存失败')
    }
  } else {
    if (win) {
      dialog.showSaveDialog(
        win,
        {
          title: '保存文件',
          defaultPath: 'new.md',
          filters: [{ name: 'Markdown', extensions: ['md'] }]
        }
      ).then((res) => {
        if (res.filePath) {
          try {
            fs.writeFileSync(res.filePath, content)
            console.log('保存成功')
            openedFile = res.filePath
          } catch (error) {
            console.log('保存失败')
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
})
const template: Array<MenuItemConstructorOptions> = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建文档',
        accelerator: 'Shift+CmdOrCtrl+N',
        click: () => {
          openedFile = ''
          if (win) {
            win.webContents.send('clearContentToNew', '')
          }
        }
      },
      {
        label: '打开文档',
        accelerator: 'Shift+CmdOrCtrl+O',
        click: () => {
          dialog.showOpenDialog(
            {
              title: '打开文件',
              defaultPath: '',
              properties: ['openFile'],
              filters: [{ name: 'Markdown', extensions: ['md'] }]
            }
          ).then((res) => {
            if (res && res.filePaths.length > 0) {
              if (win) {
                win.webContents.send('fileOpenPath', res.filePaths[0])
                openedFile = res.filePaths[0]
              }
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      },
      {
        label: '保存文档',
        accelerator: 'CmdOrCtrl+S',
        click: () => {
          if (win) {
            win.webContents.send('getContentToSave', '')
          }
        }
      },
      { type: 'separator' },
      { label: '退出', role: 'quit' }]
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

  win.on('focus', () => {
    // mac下快捷键失效的问题
    if (process.platform === 'darwin') {
      const contents = win.webContents
      globalShortcut.register('CmdOrCtrl+C', () => {
        console.log('注册复制快捷键成功')
        contents.copy()
      })
      globalShortcut.register('CmdOrCtrl+V', () => {
        console.log('注册粘贴快捷键成功')
        contents.paste()
      })
      globalShortcut.register('CmdOrCtrl+X', () => {
        console.log('注册剪切快捷键成功')
        contents.cut()
      })
      globalShortcut.register('CmdOrCtrl+A', () => {
        console.log('注册全选快捷键成功')
        contents.selectAll()
      })
      // globalShortcut.register('CmdOrCtrl+S', () => {
      //   console.log('注册保存快捷键成功')
      // })
      // globalShortcut.register('CmdOrCtrl+O', () => {
      //   console.log('注册打开快捷键成功')
      // })
      // globalShortcut.register('CmdOrCtrl+N', () => {
      //   console.log('注册新建快捷键成功')
      // })
    }
  })

  win.on('blur', () => {
    globalShortcut.unregisterAll() // 注销键盘事件
    console.log('取消快捷键')
  })

  // 从协议打开应用时，mainWindow 还没有创建完成
  setTimeout(() => {
    if (openFromProtocolUrl) {
      // win.isMinimized() && win.restore()
      if (openFromProtocolUrl.match(/^protocol:\/\//)) {
        win.webContents.send('open-url', decodeURIComponent(openFromProtocolUrl))
      } else {
        win.webContents.send('open-file', openFromProtocolUrl)
      }
      win.focus()
      openFromProtocolUrl = ''
    }
  }, 1500)
}

const openUrl = (url: string) => {
  if (win) {
    // win.isMinimized() && win.restore()
    if (url.match(/^protocol:\/\//)) {
      win.webContents.send('open-url', decodeURIComponent(url))
    } else {
      win.webContents.send('open-file', url)
    }
    win.focus()
  } else {
    openFromProtocolUrl = url
  }
}
app.on('will-finish-launching', () => {
  if (win === null) createWindow()
  app.on('open-url', (event, url) => {
    openUrl(url)
  })
  app.on('open-file', (event, url) => {
    openUrl(url)
  })
})
app.setAsDefaultProtocolClient('protocol')

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
  // mac下快捷键失效的问题
  if (process.platform === 'darwin') {
    const contents = win.webContents
    globalShortcut.register('CmdOrCtrl+C', () => {
      console.log('注册复制快捷键成功')
      contents.copy()
    })
    globalShortcut.register('CmdOrCtrl+V', () => {
      console.log('注册粘贴快捷键成功')
      contents.paste()
    })
    globalShortcut.register('CmdOrCtrl+X', () => {
      console.log('注册剪切快捷键成功')
      contents.cut()
    })
    globalShortcut.register('CmdOrCtrl+A', () => {
      console.log('注册全选快捷键成功')
      contents.selectAll()
    })
    // globalShortcut.register('CmdOrCtrl+S', () => {
    //   console.log('注册保存快捷键成功')
    // })
    // globalShortcut.register('CmdOrCtrl+O', () => {
    //   console.log('注册打开快捷键成功')
    // })
    // globalShortcut.register('CmdOrCtrl+N', () => {
    //   console.log('注册新建快捷键成功')
    // })
  }
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
