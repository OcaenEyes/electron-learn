<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-16 09:47:05
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 13:51:52
-->
<template>
    <div id="editor">
        <mavon-editor v-model="inputtext" style="height: 100%"></mavon-editor>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WriteWidget',
  setup () {
    const inputtext = ref('')
    return {
      inputtext
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
