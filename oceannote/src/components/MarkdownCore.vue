<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-16 09:50:07
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 23:41:05
-->
<template>
  <div id="editor" style="height:100%">
    <mavon-editor v-model="inputtext" style="height: 100%"></mavon-editor>
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
    onMounted(() => {
      ipcRenderer.on('fileOpenPath', (event, filepath: string) => {
        if (filepath && filepath.length > 0) {
          inputtext.value = fs.readFileSync(filepath).toString()
        }
      })
      ipcRenderer.on('getContentToSave', () => {
        ipcRenderer.send('saveContent', inputtext.value)
      })
    })
    return {
      inputtext
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
