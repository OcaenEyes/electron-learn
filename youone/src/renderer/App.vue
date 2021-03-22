<template>
  <div id="app">
    <NavBar ref="navbar"></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"
  export default {
    name: 'youone',
    components:{
      NavBar
    }
  }
</script>

<style>
  /* CSS */
</style>
