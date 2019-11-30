<template>
  <div style="width:80%;margin-left:10%;margin-top:100px;line-height:1.5;height:320px;text-align:center;display:flex;justify-content:center;">
    <el-card>
      <h2>登录</h2>
    <el-form label-width="80px" style="width:360px;" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
      <el-form-item label="账号" prop="user">
        <el-input type="email" placeholder="邮箱" style="width:80%;" v-model="ruleForm.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='pass'>
        <el-input type="password" placeholder="密码" style="width:80%;" v-model="ruleForm.pass"></el-input>
      </el-form-item>
    </el-form>
<!-- <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form> -->

    <el-button @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="goback">返回</el-button>
    <el-button><router-link to="/">首页</router-link></el-button>
    </el-card>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "Login",
  componet: "Login",
  data() {
      var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };

      return {
        ruleForm: {
          user: null,
          pass: null,
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user: [
            { validator: checkUser, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
       goback() {
      this.$router.go(-1);
    },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }

};
</script>