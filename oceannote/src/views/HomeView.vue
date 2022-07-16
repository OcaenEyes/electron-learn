<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-15 23:43:11
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 09:50:23
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {}
</script>
