<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-16 09:50:07
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 15:23:56
-->
<template>
  <div id="editor" style="height:100%">
    <mavon-editor v-model="inputtext" style="height: 100%"></mavon-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MarkdownCore',
  setup() {
    const inputtext = ref('')
    return {
      inputtext
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
