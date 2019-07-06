<template>
    <div class="login-page">
        <img class="welcome" src="">
        <div class="login">
            <div class="login_user">

            </div>
            <div class="login_password">

            </div>
            <div class="login_button">
                <input type="button" value="登录">

            </div>
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
        background-color: bisque;
    }
    .login {
        height: 60%;
        background-color: aquamarine;
    }
</style>

