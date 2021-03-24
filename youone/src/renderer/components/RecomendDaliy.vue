<template>
  <div>
    <h3 style="margin-top:4px"><span>&nbsp&nbsp</span>Hi,Just for you</h3>
    <div class="foryou">
      <div class="foryou-fm">
        <div class="cover">
          <img src="../assets/2.jpg" alt="" />
          <div class="des">私人FM</div>
        </div>
      </div>
      <div class="foryou-daliy">
        <div class="cover">
          <img src="../assets/2.jpg" alt="" />
          <div class="des">每日歌曲</div>
        </div>
      </div>
      <div class="foryou-new">
        <div class="cover">
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
  width: 48%;
  max-width: 514px;
  margin-left: 1%;
  margin-right: 1%;
}
.foryou-daliy {
  width: 23%;
  max-width: 240px;
  margin-left: 1%;
  margin-right: 1%;
}
.foryou-new {
  width: 23%;
  max-width: 240px;
  margin-left: 1%;
  /* margin-right: 1%; */
}
.cover {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.des {
  padding: 4px;
  font-size: 14px;
  color: #222;
}
</style>