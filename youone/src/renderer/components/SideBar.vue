<template>
  <div class="sidebar">
    <div>
      <img class="logo" src="../assets/logo.png" alt="" style="" />
    </div>

    <div :style="sidescroll" class="side-scroll-bar">
      <ul>
        <li class="nav-item"><a href="">推荐</a></li>
        <li class="nav-item"><a href="">发现</a></li>
        <li class="nav-item"><a href="">视频</a></li>
        <li class="nav-item"><a href="">电台</a></li>
        <li class="nav-item"><a href="">我的</a></li>

        <li class="nav-item"><a href="">推荐</a></li>
        <li class="nav-item"><a href="">发现</a></li>
        <li class="nav-item"><a href="">视频</a></li>
        <li class="nav-item"><a href="">电台</a></li>
        <li class="nav-item"><a href="">我的</a></li>

        <li class="nav-item"><a href="">推荐</a></li>
        <li class="nav-item"><a href="">发现</a></li>
        <li class="nav-item"><a href="">视频</a></li>
        <li class="nav-item"><a href="">电台</a></li>
        <li class="nav-item"><a href="">我的</a></li>

        <li class="nav-item"><a href="">推荐</a></li>
        <li class="nav-item"><a href="">发现</a></li>
        <li class="nav-item"><a href="">视频</a></li>
        <li class="nav-item"><a href="">电台</a></li>
        <li class="nav-item"><a href="">我的</a></li>
        <li class="nav-item"><a href="">推荐</a></li>
        <li class="nav-item"><a href="">发现</a></li>
        <li class="nav-item"><a href="">视频</a></li>
        <li class="nav-item"><a href="">电台</a></li>
        <li class="nav-item"><a href="">我的</a></li>
        <li class="nav-item"><a href="">推荐</a></li>
        <li class="nav-item"><a href="">发现</a></li>
        <li class="nav-item"><a href="">视频</a></li>
        <li class="nav-item"><a href="">电台</a></li>
        <li class="nav-item"><a href="">我的</a></li>
      </ul>
    </div>
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
  height: 40px;
  padding-left: 30px;
  padding-top: 16px;
}
.sidebar .nav-item {
  list-style: none;
  width: 128px;
  padding-right: 8px;
  padding-left: 8px;
  margin-bottom:10px;
  border-radius: 6px;
}
.nav-item:hover{
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
}
.side-scroll-bar:hover {
  display: block;
  white-space: nowrap;
  overflow-y: auto;
}
.side-scroll-bar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.side-scroll-bar::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgb(240, 240, 240);
}
</style>