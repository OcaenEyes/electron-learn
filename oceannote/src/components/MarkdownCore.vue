<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-16 09:50:07
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-18 13:56:30
-->
<template>
  <div id="editor" style="height:100%">
    <mavon-editor v-model="inputtext" style="height: 100%" :toolbars="mdOptions"></mavon-editor>
  </div>
</template>

<script lang="ts">
import { ipcRenderer } from 'electron'
import { defineComponent, onMounted, ref } from 'vue'
import fs from 'fs'
export default defineComponent({
  name: 'MarkdownCore',
  setup() {
    const inputtext = ref('')
    const mdOptions = ref<Record<string, unknown>>({})
    onMounted(() => {
      ipcRenderer.on('fileOpenPath', (event, filepath: string) => {
        if (filepath && filepath.length > 0) {
          inputtext.value = fs.readFileSync(filepath).toString()
        }
      })
      ipcRenderer.on('getContentToSave', () => {
        ipcRenderer.send('saveContent', inputtext.value)
      })
      ipcRenderer.on('clearContentToNew', () => {
        inputtext.value = ''
      })
      mdOptions.value = {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true// 预览
      }

      const fileAssociationsReg = /\.md$/g
      ipcRenderer.on('open-file', (event, filepath) => {
        console.log(filepath)
        if (!filepath.match(fileAssociationsReg)) return console.log(`%c错误，该文件不为文本：${filepath}`, 'color:red')
        inputtext.value = fs.readFileSync(filepath).toString()
      })
      ipcRenderer.on('open-url', (event, url) => {
        const payload = url.replace(/protocol:\/\//, '').split('/')
        inputtext.value = fs.readFileSync(payload).toString()
      })
      const dragWrapper = document.getElementById('editor')
      // console.log(dragWrapper)
      dragWrapper?.addEventListener('drop', (e) => {
        e.preventDefault()
        const files = e.dataTransfer?.files
        // console.log(files)
        if (files && files.length > 0) {
          inputtext.value = fs.readFileSync(files[0].path).toString()
        }
      })
      //  阻止拖拽结束事件默认行为
      dragWrapper?.addEventListener('dragover', (e) => {
        e.preventDefault()
      })
    })

    return {
      inputtext,
      mdOptions
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
