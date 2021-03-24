<template>
  <div id="app">
    <div class="leftcontent" :style="leftcontentview">
      <SideBar></SideBar>
    </div>
    <div class="rightcontent">
      <NavBar ref="navbar"></NavBar>
      <div class="maincontent" :style="maincontentview">
        <router-view></router-view>
      </div>
      <Player></Player>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import SideBar from "./components/SideBar";
let windowWidth = parseInt(window.innerWidth);
let windowHeight = parseInt(window.innerHeight);
export default {
  name: "youone",
  components: {
    NavBar,
    Player,
    SideBar,
  },
  data() {
    return {
      windowWidth: windowWidth,
      windowHeight: windowHeight,
      maincontentview: {
        width: "",
        height: "",
        left: "210px",
        top: "64px",
        bottom: "64px",
        position: "fixed",
      },
      leftcontentview: {
        height: "",
      },
    };
  },

  methods: {
    getView() {
      console.log("windowWidth");
      console.log(windowWidth);
      this.maincontentview.width = windowWidth - 210 + "px";
      console.log(this.maincontentview.width);
      this.maincontentview.height = windowHeight - 128 + "px";
      console.log(this.maincontentview.height);
      this.leftcontentview.height = windowHeight;
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

<style>
/* CSS */
#app {
  display: flex;
  flex-direction: row;
  font-family: "Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
}
.leftcontent {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 210px;
  background-color: rgb(245, 245, 245);
  -webkit-user-select: none;
}
img {
  -webkit-user-select: none;
}
a{
  text-decoration: none;
}
</style>
