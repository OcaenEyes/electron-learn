<template>
  <div class="recomendmusic">
    <div class="daliy-music">
      <Daliy style="height: 100%"></Daliy>
    </div>
    <div class="song-list">
      <Songlist></Songlist>
    </div>
  </div>
</template>

<script>
import Daliy from "./RecomendDaliy";
import Songlist from "./RecomendSongList";
export default {
  name: "RecomendMusic",
  components: {
    Daliy,
    Songlist,
  },
};
</script>

<style scoped>
.recomendmusic {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.daliy-music {
  height: 40%;
  max-height: 340px;
  padding-left: 20px;
  margin-bottom: 10px;
}
.song-list {
  height: 60%;
  padding: 20px;
}
.recomendmusic::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.recomendmusic::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgb(224, 224, 224);
}
</style>