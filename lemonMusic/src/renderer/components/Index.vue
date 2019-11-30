<template>
  <div @@mousewheel.prevent>
    <el-aside style="width:16%">
      <UserInfo style="text-align:center;"></UserInfo>

      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        
      </el-header>
      <el-main class="main">
        <Banner></Banner>
        <router-link to="/land"></router-link>

        <RecommendList></RecommendList>
      </el-main>
      <el-footer>
        <MPlayer></MPlayer>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-aside {
  height: 100%;
  position: absolute;
  /* padding-left: 10px; */
  top: 0;
  left: 0;
  color: #fff;
  box-sizing: border-box;
}

.el-container{
  width: 84%;
  height: 100%;
}
.el-main {
  width: 84%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  margin-left: 16%;
  position: absolute;
  top:0;
  left: 0;


}

.el-header {
  height: 68px;
  width: 84%;
  position: absolute;
  top: 0;
  left: 16%;
  box-sizing: border-box;
}
</style>

<script>
import Aside from "./Aside/Aside";
import UserInfo from "./UserInfo/UserInfo";
import MPlayer from "./Player/MusicPlayer";
import Banner from "./Main/Banner";
import RecommendList from "./Main/Recommend";
export default {
  name: "IndexPage",
  components: {
    Aside,
    MPlayer,
    UserInfo,
    Banner,
    RecommendList
  }
};
</script>