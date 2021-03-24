<template>
  <div class="player">
    <div class="progressbar">这是进度条</div>
    <div class="play-controls">
      <div class="music-palying-info">播放信息</div>

      <div class="middle-control-buttons">控制器</div>

      <div class="right-control-buttons">快捷菜单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
};
</script>

<style scoped>
.player {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 210px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 64px;
  -webkit-app-region: no-drag;
}
.progressbar {
  font-size: 10px;
  text-align: center;
}
.play-controls {
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>