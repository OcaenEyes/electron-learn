<template>
  <div>
    <el-row>
      <h3>推荐歌单</h3>
      <el-col
        :span="4"
        style="padding:0;margin-left:12px;margin-right:12px;"
        v-for="(recommend,index) in recommendMusicList "
        :key="index"
      >
        <el-card :body-style="{padding:'0px',}" shadow="hover">
          <!-- <span>{{recommend.id}}</span> -->
          <el-image :src="recommend.picUrl"></el-image>
        </el-card>
        <span style="color:#111;font-size:12px;">{{recommend.name}}</span>
        <span style="color:#999;font-size:10px;">{{recommend.playCount}}</span>
      </el-col>
    </el-row>


    <el-row style="margin-bottom:20px;">
      <h3>推荐MV</h3>
      <el-col
        :span="5"
        style="padding:0;margin-left:15px;margin-right:15px;"
        v-for="(recommend,index) in recommendMvList "
        :key="index"
      >
        <el-card :body-style="{padding:'0px',}" shadow="hover">
          <!-- <span>{{recommend.id}}</span> -->
          <el-image :src="recommend.picUrl"></el-image>
        </el-card>
        <span style="color:#111;font-size:12px;">{{recommend.name}}</span>
        <span style="color:#999;font-size:10px;">{{recommend.playCount}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-row {
  margin-bottom: 20px;
  margin-left: 20px;
}
</style>

<script>
export default {
  name: "RecommendList",
  data() {
    return {
      recommendMusicList: null,
      recommendMvList: null,
    };
  },
  created() {
    this.getRecommendMusicList();
    this.getRecommendMvList();
  },
  methods: {
    getRecommendMusicList() {
      this.$http
        .get("http://localhost:3000/personalized?limit=5")
        .then(res => (this.recommendMusicList = res.data.result));
    },

    getRecommendMvList() {
      this.$http
        .get("http://localhost:3000/personalized/mv")
        .then(res => (this.recommendMvList = res.data.result));
    },
  }
};
</script>