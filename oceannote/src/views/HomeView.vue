<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-15 23:43:11
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 15:34:37
-->
<template>
  <div class="home" :style="{ height: viewh }">
    <!-- <el-row style="height:100%">
      <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2">
        <file-list></file-list>
      </el-col>
      <el-col :xs="20" :sm="20" :md="22" :lg="22" :xl="22">
        <markdown-core></markdown-core>
      </el-col>
    </el-row> -->
    <markdown-core></markdown-core>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import MarkdownCore from '../components/MarkdownCore.vue'
import FileList from '../components/FileList.vue'
export default defineComponent({
  name: 'HomeView',
  components: { MarkdownCore },
  setup() {
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

<style lang="scss" scoped>
</style>
