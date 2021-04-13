<template>
  <div class="player">
    <div class="progressbar">
      <vue-slider
        v-model="value"
        :contained="true"
        :height="2"
        :dotSize="[4, 4]"
        :tooltip="'none'"
      >
      </vue-slider>
    </div>
    <div class="play-controls">
      <div class="music-palying-info">
        <div class="song-cover">
          <img src="../assets/1.jpg" alt="" />
        </div>
        <div class="song-info">
          <div class="song-name">The Saltwater Room-Owl City</div>
          <div class="song-time">00:00/03:18</div>
        </div>
      </div>
      <div class="middle-control-buttons">
        <i class="fa fa-step-backward fa-lg"></i>
        <i class="fa fa-play-circle fa-2x"></i>
        <!-- <i class="fa fa-pause fa-2x"></i> -->
        <i class="fa fa-step-forward fa-lg"></i>
        <i class="fa fa-volume-down fa-lg"></i>
      </div>

      <div class="right-control-buttons">
        <i class="fa fa-history fa-lg"></i>
        <i class="fa fa-list fa-lg"></i>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";

import "../css/sliderStyle.css";
export default {
  name: "Player",
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 0,
    };
  },
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
  padding-left: 28px;
  padding-right: 36px;
}
.music-palying-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.song-cover {
  width: 36px;
  height: 36px;
}
.song-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}
.song-info {
  margin-left: 10px;
  height: 36px;
  display: flex;
  max-width: 80px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.song-name{
  white-space: nowrap;
}
.song-time {
  color: #666;
}
.play-controls {
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 28px;
  margin-right: 36px;
  padding-bottom: 6px;
}
.middle-control-buttons {
  min-width: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.right-control-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 48px;
  max-width: 48px;
}
</style>