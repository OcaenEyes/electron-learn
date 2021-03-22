<template>
  <div>
    <nav>
      <div class="titlebar">
        <div class="title">YouOneMusic</div>
        <div class="controls">
            <div class="button" @click="windowMinimize">最小化</div>
            <div class="button" @click="widowMaxRestore">最大化</div>
            <div class="button" @click="windowClose">关闭</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 64px;
  line-height: 48px;
  background-color: azure;
  z-index: 100;
}
.titlebar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.titlebar .title{
    padding: 8px;
    font-size: 16px;
    margin-bottom: 0;
    font-family:'Segoe UI',"Microsoft YaHei UI", "Microsoft YaHei",sans-serif;
}
.titlebar .controls {
    height: 32px;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    font-family:'Segoe UI',"Microsoft YaHei UI", "Microsoft YaHei",sans-serif;
}
.titlebar .controls .button {
    font-size: 12px;
    height: 100%;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>