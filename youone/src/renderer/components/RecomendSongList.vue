<template>
  <div>
    <H3><span>&nbsp&nbsp</span>推荐歌单</H3>
    <div class="lists">
      <div class="list-item" v-for="(o, i) in 8" :key="o">
        <div class="cover">
          <img src="../assets/1.jpg" alt="" />
        </div>
        <div class="des">
          <span> 你好 {{ i }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Songlist",
  data() {
    return {};
  },
};
</script>

<style scoped>
.lists {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.list-item {
  width: 23%;
  /* max-width: 12%; */
  margin-right: 1%;
  margin-left: 1%;
  margin-top: 2px;
  margin-bottom: 20px;
}

.list-item .cover img {
  width: 100%;
  border-radius: 10px;
}
.des {
  padding: 4px;
  font-size: 14px;
  color: #222;
}
</style>