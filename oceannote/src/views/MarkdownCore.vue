<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-16 09:50:07
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 13:57:12
-->
<template>
  <div class="main-app" :style="{ height: viewh }">
    <el-row :gutter="10" style="height: 100%; margin: 0">
      <el-col :xs="20" :sm="12" :md="12" :lg="11" :xl="11">
        <WriteWidget></WriteWidget
      ></el-col>
      <el-col :xs="0" :sm="12" :md="12" :lg="11" :xl="11">
        <Readwidget></Readwidget
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import Readwidget from '../components/ReadWidget.vue'
import WriteWidget from '../components/WriteWidget.vue'

export default defineComponent({
  name: 'MarkdownCore',
  components: { Readwidget, WriteWidget },
  setup () {
    const viewh = ref('')

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
      viewh
    }
  }
})
</script>

<style lang="sass" scoped>
</style>
