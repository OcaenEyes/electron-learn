<template>
 <el-card shadow="never">
    <router-link to="/login" style="color:#333;">
      <div>
        <el-avatar
          :size="50"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      登录柠檬音乐
    </router-link>
 </el-card>
</template>

<style scoped>
.el-card {
  border: none;
  border-radius: 0;
  margin-top: 36px;
}
</style>

<script>
export default {
  name: "UserInfo",
  };
</script>