<template>
  <div
    style="width:80%;margin-left:10%;margin-top:100px;line-height:1.5;height:320px;text-align:center;display:flex;justify-content:center;"
  >
    <el-card>
      <h2>登录</h2>
      <el-form label-width="80px" style="width:360px;" :model="loginForm" status-icon>
        <el-form-item label="账号" prop="user">
          <el-input type="email" placeholder="邮箱" style="width:80%;" v-model="loginForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" placeholder="密码" style="width:80%;" v-model="loginForm.pass"></el-input>
        </el-form-item>
      </el-form>

      <el-button @click="submitForm('loginForm')">登录</el-button>
      <el-button @click="goback">返回</el-button>
      <el-button>
        <router-link to="/">首页</router-link>
      </el-button>
    </el-card>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        user: "",
        pass: ""
      }
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    submitForm(formName) {
      this.$http
        .post("http://localhost:3000/login", {
          params: {
            data: Qs.stringify(this.loginForm)
          }
        })
        .then(function(res) {
          if (res.data == "fail") {
            console.log("异常");
          } else {
            this.$router.push("/");
          }
        });
    }
  }
};
</script>