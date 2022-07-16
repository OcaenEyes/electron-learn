<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-16 09:50:07
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 14:32:04
-->
<template>
  <div class="main-app" :style="{ height: viewh }">
    <div id="editor" style="height:100%">
      <mavon-editor v-model="inputtext" style="height: 100%"></mavon-editor>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  name: 'MarkdownCore',
  setup() {
    const viewh = ref('')
    const inputtext = ref('')
    window.onresize = () => {
      viewh.value = Number(`${document.documentElement.clientHeight}`) + 'px'
    }
    onBeforeMount(() => {
      const tmph = Number(`${document.documentElement.clientHeight}`)
      // console.log(tmph)
      viewh.value = tmph + 'px'
      // console.log(viewh)
    })
    return {
      viewh,
      inputtext
    }
  }
})
</script>

<style lang="sass" scoped>
</style>
