<!--
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-15 23:43:11
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 10:52:44
-->
<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
