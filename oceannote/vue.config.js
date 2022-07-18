/*
 * @Descripttion:
 * @version: V0.0.1
 * @Author: OCEAN.GZY
 * @Date: 2022-07-15 17:35:07
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-18 12:45:40
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  publicPath: './',
  pwa: {
    iconPaths: {
      favicon32: 'favicon.png',
      favicon16: 'favicon.png',
      appleTouchIcon: 'favicon.png',
      maskIcon: 'favicon.png',
      msTileImage: 'favicon.png'
    }
  },
  // electron 13 把"build":{}从package.json移除，在vue.config.js里写
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: 'oceannote', // 打包名称
        appId: 'cn.gzy.oceannote',
        copyright: 'Copyright © 2022',
        publish: [
          {
            provider: 'generic',
            url: ''
          }
        ],
        fileAssociations: {
          ext: [
            'md',
            'markdown'
          ],
          name: 'markdown',
          role: 'Editor'
        },
        nsis: {
          allowToChangeInstallationDirectory: true,
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
          shortcutName: 'oceannote',
          perMachine: true,
          oneClick: false
        },
        dmg: {
          contents: [
            {
              x: 410,
              y: 150,
              type: 'link',
              path: '/Applications'
            },
            {
              x: 130,
              y: 150,
              type: 'file'
            }
          ]
        },
        // productName 包名称 version 包版本(package.json)  ext后缀
        mac: {
          icon: 'public/icons/icon.icns',
          extendInfo: {
            CFBundleURLSchemes: [
              'protocol'
            ]
          }
        },
        win: {
          icon: 'public/icons/icon.ico'

        },
        linux: {
          icon: 'public/icons'

        }
      }
    }
  }
})
