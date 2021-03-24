<template>
  <div class="sidebar">
    <div>
      <img class="logo" src="../assets/logo.png" alt="" style="" />
    </div>

    <div :style="sidescroll" class="side-scroll-bar">
      <div class="nav-head">
        <ul>
          <li class="nav-item"><a href="">推荐</a></li>
          <li class="nav-item"><a href="">音乐馆</a></li>
          <li class="nav-item"><a href="">视频</a></li>
          <li class="nav-item"><a href="">电台</a></li>
        </ul>
      </div>

      <div class="nav-group">
        <div class="nav-group-title">创建的歌单</div>
        <ul>
          <li class="nav-item" v-for="(o, i) in 5" :key="o">
            <a href="">创建的歌单{{ i + 1 }}</a>
          </li>
        </ul>
      </div>

      <div class="nav-group">
        <div class="nav-group-title">收藏的歌单</div>
        <ul>
          <li class="nav-item" v-for="(o, i) in 10" :key="o">
            <a href="">收藏的歌单{{ i + 1 }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div style="height: 20px; background-color: #fff"></div>
  </div>
</template>

<script>
let windowHeight = parseInt(window.innerHeight);
export default {
  name: "SideBar",
  data() {
    return {
      windowHeight: windowHeight,
      sidescroll: {
        height: "",
        overflow: "",
      },
    };
  },
  methods: {
    getView() {
      this.sidescroll.height = windowHeight - 56 + "px";
      console.log("sidescroll height ");
      console.log(this.sidescroll.height);
    },
  },
  created() {
    window.addEventListener("resize", this.getView);
    this.getView();
  },
  destroyed() {
    window.removeEventListener("resize", this.getView);
  },
};
</script>

<style scoped>
.logo {
  width: 120px;
  height: 34px;
  padding-left: 30px;
  padding-top: 16px;
  margin-top: 28px;
  margin-bottom: 4px;
  -webkit-app-region: drag;
}

.nav-group {
  margin-top: 20px;
  margin-bottom: 20px;
}
.nav-group-title {
  font-size: 12px;
  color: #666;
  padding-left: 40px;
}
.sidebar .nav-item {
  list-style: none;
  width: 128px;
  padding-right: 8px;
  padding-left: 8px;
  margin-bottom: 10px;
  border-radius: 6px;
}
.sidebar .nav-group ul {
  margin-top: 10px;
  margin-bottom: 10px;
}
.nav-item:hover {
  background-color: rgb(202, 202, 202);
}
.sidebar .nav-item a {
  display: block;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #000;
  font-family: "Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
}
.side-scroll-bar {
  overflow: hidden;
  -webkit-app-region: drag;
}
.side-scroll-bar:hover {
  display: block;
  white-space: nowrap;
  overflow-y: auto;
  padding-bottom: 20px;
}
.side-scroll-bar::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.side-scroll-bar::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgb(209, 209, 209);
}
</style>