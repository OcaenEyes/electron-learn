<template>
    <div class="login-page">
        <img class="welcome" src="">
        <div class="login">
            <div class="login_user">
                <sapn>账户：</sapn><input type="text" placeholder="请输入用户名／邮箱／手机号">
            </div>
            <div class="login_password">
                <span>密码：</span><input type="password" placeholder="请输入密码">
            </div>
            <input  class="login_button" type="button" value="登录">
        </div>

    </div>
</template>

<script>
    export default {
        name:'login',
        data () {
            return {
                inputType :'password',
            }
        },
    }
      
</script>

<style>
    body {
        background-color: aquamarine;
    }
    .welcome {
        height: 200px;
        background-color: bisque;
    }
    .login {
        height: 200px;
        background-color: red;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        font-size: 14px;
        font-family: sans-serif;
    }
    .login_user{
        margin-top: 20px;
        /* height: 40px; */
        width: 300px;
    }
    .login_password {
        /* height: 40px; */
        margin-top: 20px;
        width: 300px;
    }
    .login_button{
        margin-top: 20px;
        width: 100px;
        height: 30px;
        background-color: aqua;
        border-radius: 15px;
        border: 0px;

    }
</style>

