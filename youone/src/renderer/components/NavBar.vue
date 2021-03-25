<template>
  <div>
    <nav>
      <div class="titlebar">
        <div class="title">
          <i class="fa fa-angle-left fa-lg"></i>
          <span>&nbsp&nbsp&nbsp&nbsp</span>
          <i class="fa fa-angle-right fa-lg"></i>
        </div>
        <div class="search">
          <!-- <input type="text" placeholder="搜索" /> -->
        </div>
        <div class="controls">
          <div class="button" @click="userInfo">账户</div>
          <div class="button" @click="setting">设置</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    userInfo() {},
    setting() {},
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 210px;
  height: 64px;
  line-height: 48px;
  z-index: 100;
  -webkit-app-region: drag;
}
.titlebar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.titlebar .title {
  padding: 8px;
  padding-left: 30px;
  font-size: 14px;
  margin-bottom: 0;
  color: rgb(124, 124, 124);
  font-family: "Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
}
.titlebar .controls {
  height: 32px;
  margin-left: auto;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  font-family: "Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
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