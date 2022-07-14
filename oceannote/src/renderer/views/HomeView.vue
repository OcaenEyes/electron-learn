<!--
 * @Descripttion: 
 * @version: V0.0.1
 * @Author: OCEAN.GZY
 * @Date: 2022-07-14 22:50:46
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-14 23:49:40
-->
<template>
  <div class="home-view">
    <write-widget></write-widget>
    <read-widget></read-widget>
  </div>
</template>


<script>
import ReadWidget from "../components/MarkdownCore/ReadWidget.vue";
import WriteWidget from "../components/MarkdownCore/WriteWidget.vue";
export default {
  name: "HomeView",
  components: { ReadWidget, WriteWidget },
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.home-view {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
}
</style>

