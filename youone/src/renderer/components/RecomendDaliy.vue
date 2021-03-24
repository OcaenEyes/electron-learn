<template>
  <div>
    <h2><span>&nbsp&nbsp</span>Hi,Just for you</h2>
    <div class="foryou">
      <div class="foryou-fm">
        <div class="foryou-fm-cover">
          <img src="../assets/2.jpg" alt="" />
          <div class="des">私人FM</div>
        </div>
      </div>
      <div class="foryou-daliy">
        <div class="daliy-music-cover">
          <img src="../assets/2.jpg" alt="" />
          <div class="des">每日歌曲</div>
        </div>
      </div>
      <div class="foryou-new">
        <div class="new-music-cover">
          <img src="../assets/2.jpg" alt="" />
          <div class="des">新歌推荐</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Daliy",
  data() {
    return {};
  },
};
</script>

<style scoped>
.foryou {
  display: flex;
  flex-direction: row;
  height: 76%;
  max-height: 280px;
}
.foryou-fm {
  width: 47%;
  max-width: 524px;
  margin-left: 1%;
  margin-right: 1%;
}
.foryou-daliy {
  width: 23%;
  max-width: 262px;
  margin-left: 1%;
  margin-right: 1%;
}
.foryou-new {
  width: 23%;
  max-width: 262px;
  margin-left: 1%;
  margin-right: 1%;
}
.new-music-cover {
  width: 100%;
  height: 100%;
}
.foryou-fm-cover {
  width: 100%;
  height: 100%;
}

.daliy-music-cover {
  width: 100%;
  height: 100%;
}
.foryou-fm-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.daliy-music-cover img {
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.new-music-cover img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.des {
  padding: 4px;
  font-size: 14px;
  color: #222;
}
</style>