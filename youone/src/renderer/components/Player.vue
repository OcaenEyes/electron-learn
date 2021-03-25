<template>
  <div class="player">
    <div class="progressbar"></div>
    <div class="play-controls">
      <div class="music-palying-info">播放信息</div>
      <div class="middle-control-buttons">
        <i class="fa fa-step-backward fa-lg"></i>
        <i class="fa fa-play-circle fa-2x"></i>
        <!-- <i class="fa fa-pause fa-2x"></i> -->
        <i class="fa fa-step-forward fa-lg"></i>
        <i class="fa fa-volume-down fa-lg"></i>
      </div>

      <div class="right-control-buttons">快捷菜单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      value: [0, 100],
    };
  },
  components: {},
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
.play-controls {
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.middle-control-buttons {
  min-width: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>