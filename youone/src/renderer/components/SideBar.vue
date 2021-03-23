<template>
  <div class="sidebar">
    <ul>
      <div class="logo">
        <li class="nav-item">
          <img
            src="../assets/logo.png"
            alt=""
            style="width: 120px; height: 40px"
          />
        </li>
      </div>

      <div class="side-scroll-bar">
        <li class="nav-item">
          <a href="">推荐</a>
        </li>

        <li class="nav-item"><a href="">发现</a></li>

        <li class="nav-item"><a href="">视频</a></li>

        <li class="nav-item"><a href="">电台</a></li>

        <li class="nav-item"><a href="">我的</a></li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.sidebar .nav-item {
  list-style: none;
}

.sidebar .nav-item a {
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #000;
  font-family: "Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
}
</style>