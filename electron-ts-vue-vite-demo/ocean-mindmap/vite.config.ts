/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-21 22:45:05
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-21 23:23:54
 * @FilePath: /ocean-mindmap-old/ocean-mindmap/vite.config.ts
 * @Description: 注释信息
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import electron from 'vite-plugin-electron'
import electronRenderer from 'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    electron([
      {
        entry: "electron/main/index.ts",
        vite: {
          build: {
            sourcemap: true,
            outDir:"./dist/main"
          }
        }
      },
      {
        entry: "electron/preload/index.ts",
        vite: {
          build: {
            sourcemap: true,
            outDir:"./dist/preload"
          }
        },
      },
    ]),
    electronRenderer(),
  ],
})
