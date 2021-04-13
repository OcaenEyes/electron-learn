<template>
  <div>
    <h3><span>&nbsp&nbsp</span><a href="" style="color: #000">推荐歌单</a></h3>

    <div class="lists">
      <div
        class="list-item"
        v-for="(songlist,i) in songlistres"
        :key="i"
      >
        <div class="cover">
          <img :src="songlist.picUrl" alt="" />
        </div>
        <div class="des">
          <span>{{ songlist.name }}</span>
        </div>
        <div class="playcount">
          <i class="fa fa-play-circle"></i>
          <span>{{Math.round(songlist.playCount /10000)}} 万</span>
        </div>
        <div class="playingsonglist">
          <i class="fa fa-play-circle fa-3x"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var songlistres = {
  hasTaste: false,
  code: 200,
  category: 0,
  result: [
    {
      id: 5284698489,
      type: 0,
      name: "欧美‖Oh~honey眼里全是你",
      copywriter: "编辑推荐：我记得你说，不会留我一个人在这",
      picUrl:
        "https://p1.music.126.net/Gp35VrnI-fjl1TohE6LBkg==/109951165875793898.jpg",
      canDislike: false,
      trackNumberUpdateTime: 1618291091431,
      playCount: 315422,
      trackCount: 32,
      highQuality: false,
      alg: "featured",
    },
    {
      id: 6704549152,
      type: 0,
      name: "生活奇奇怪怪，但你要可可爱爱呀",
      copywriter: "编辑推荐：想逃离此刻直奔今年的盛夏...",
      picUrl:
        "https://p1.music.126.net/gOUdYFVXv5a4mwyeXFNYmA==/109951165878420630.jpg",
      canDislike: false,
      trackNumberUpdateTime: 1618024790992,
      playCount: 289454,
      trackCount: 29,
      highQuality: false,
      alg: "featured",
    },
    {
      id: 5068534740,
      type: 0,
      name: "还好大雾四起 藏匿难言爱意",
      copywriter: "热门推荐",
      picUrl:
        "https://p1.music.126.net/UDv_LqXIRs91911xBuVhhg==/109951165612512203.jpg",
      canDislike: true,
      trackNumberUpdateTime: 1617290647019,
      playCount: 3153127,
      trackCount: 178,
      highQuality: false,
      alg: "cityLevel_unknow",
    },
    {
      id: 3110865674,
      type: 0,
      name: "你数数 这是你第几次丢下我",
      copywriter: "热门推荐",
      picUrl:
        "https://p1.music.126.net/Xvo6PwBcdOA69ipcpV9YYg==/109951165463253777.jpg",
      canDislike: true,
      trackNumberUpdateTime: 1618242210382,
      playCount: 10262330,
      trackCount: 124,
      highQuality: false,
      alg: "cityLevel_unknow",
    },
    {
      id: 2563964746,
      type: 0,
      name: "网易云那些10至100w+评论的歌单按专辑排序",
      copywriter: "热门推荐",
      picUrl:
        "https://p1.music.126.net/pw6D4jBzPOIpdz4cAMTkVg==/109951164845611021.jpg",
      canDislike: true,
      trackNumberUpdateTime: 1614093457102,
      playCount: 1959101,
      trackCount: 354,
      highQuality: false,
      alg: "cityLevel_unknow",
    },
    {
      id: 4968158440,
      type: 0,
      name: "如果可以，我想和你讲一辈子废话",
      copywriter: "热门推荐",
      picUrl:
        "https://p1.music.126.net/TuiQPRXVFdMxGns51n-6qQ==/109951164903302503.jpg",
      canDislike: true,
      trackNumberUpdateTime: 1615948693847,
      playCount: 3551369,
      trackCount: 96,
      highQuality: false,
      alg: "cityLevel_unknow",
    },
    {
      id: 5152332685,
      type: 0,
      name: "我们不能总为不值得的人流太多眼泪",
      copywriter: "热门推荐",
      picUrl:
        "https://p1.music.126.net/AB-3WsIeCfDPkRyF_csLVQ==/109951165260265255.jpg",
      canDislike: true,
      trackNumberUpdateTime: 1617604686375,
      playCount: 21955496,
      trackCount: 234,
      highQuality: false,
      alg: "cityLevel_unknow",
    },
    {
      id: 5051447966,
      type: 0,
      name: "神仙翻唱 | 这些翻唱这么火大概就是好听吧",
      copywriter: "热门推荐",
      picUrl:
        "https://p1.music.126.net/ns0C_DgZp8SAxwWLjtJ_7Q==/109951165137169029.jpg",
      canDislike: true,
      trackNumberUpdateTime: 1617005638707,
      playCount: 7825928,
      trackCount: 63,
      highQuality: false,
      alg: "cityLevel_unknow",
    },
  ],
};
export default {
  name: "Songlist",
  data() {
    return {
      songlistres: songlistres.result,
    };
  },
  created() {
    console.log(this.songlistres);
  },
  mounted() {},
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
  max-width: 240px;
  margin-right: 1%;
  margin-left: 1%;
  margin-top: 2px;
  margin-bottom: 20px;
  position: relative;
}

.list-item .cover img {
  width: 100%;
  border-radius: 10px;
}
.des {
  padding: 4px;
  font-size: 14px;
  color: #222;
  /* white-space: nowrap; */
  /* text-overflow:ellipsis; */
  /* overflow:hidden; */
}
.playcount {
  z-index: 2;
  text-align: right;
  top: 4px;
  right: 6px;
  float: right;
  width: 60px;
  height: 20px;
  position: absolute;
  font-size: 12px;
  color: #fff;
}
.playingsonglist{
  z-index: 99;
  float: left;
  top: 0;
  left: 0;
  position: absolute;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 181px;
  background-color: rgb(0, 0, 0);
  border-radius:10px;
  opacity: 0;
}
.playingsonglist:hover{
  opacity: 0.6;
}
</style>