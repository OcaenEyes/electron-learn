<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(banner,index) in banners" :key="index">
      <a :href="banner.url"><el-image :src="banner.imageUrl" style="width:100%;height:200px;"></el-image></a>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 80px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  name: "Banner",
  data() {
    return {
      banners: null
    };
  },
  created() {
    this.getBanners();
  },
  methods: {
    getBanners() {
      this.$http
        .get("http://localhost:3000/banner")
        .then(res => (this.banners = res.data.banners));
    }
  }
};
</script>