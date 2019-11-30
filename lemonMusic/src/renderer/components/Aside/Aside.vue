<template>

  <el-menu>
    <el-card shadow="never" style="padding-bottom:10px">
      <el-menu-item-group>
        <span>音乐馆</span>
        <el-menu-item style="padding-left:8px;line-height:1.5;">
          <el-link icon="el-icon-headset" :underline="false" type="info">发现音乐</el-link>
        </el-menu-item>
        <el-menu-item style="padding-left:8px;line-height:1.5;">
          <el-link icon="el-icon-mic" :underline="false" type="info">私人FM</el-link>
        </el-menu-item>
        <el-menu-item style="padding-left:8px;line-height:1.5;">
          <el-link icon="el-icon-video-play" :underline="false" type="info">音乐视频</el-link>
        </el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group>
        <span>我的音乐</span>
        <el-menu-item style="padding-left:8px;line-height:1.5;">
          <router-link to="/login">
            <el-link icon="el-icon-lollipop" :underline="false" type="info">我喜欢</el-link>
          </router-link>
        </el-menu-item>
        <el-menu-item style="padding-left:8px;line-height:1.5;">
          <el-link icon="el-icon-time" :underline="false" type="info">播放历史</el-link>
        </el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group>
        <span>创建的歌单&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-plus"></i></span>

      </el-menu-item-group>

      <el-menu-item-group >
        <span>收藏的歌单</span>
        <el-menu-item style="padding-left:8px;line-height:1.5;" v-for="(i,index) in 3" :key="index">
          <el-link icon="el-icon-paperclip" :underline="false" type="info" >收藏歌单{{i}}</el-link>
        </el-menu-item>


      </el-menu-item-group>
    </el-card>
  </el-menu>
</template>

<style scoped>
.el-menu {
  border: none;
  border-radius: 0;
}
.el-card {
  border: none;
  border-radius: 0;
}
.el-menu-item {
  height: 40px;
}
.el-menu-item:focus, .el-menu-item:hover {
  outline:0;
  background-color: #fff;
}
.el-link {
  height: 40px;
  font-size: 12px;
}
</style>

<script>
export default {
  name: "Aside"
};
</script>