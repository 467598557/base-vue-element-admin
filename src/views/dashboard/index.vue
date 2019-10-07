<template >
    <section id="homePageView">
        <header id="header">
            <a href="javascript:void(0)" >LOGO</a>
            <span class="login-info">
                当前登录：{{$user.nickName}}
                <a href="javascript:void(0)" @click="exit">退出</a>
            </span>
        </header>
        <router-view id="main"></router-view>
    </section>
</template>

<script type="text/javascript" >
    export default {
        methods: {
            exit() {
                this.$router.push(`/`);
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped="">
    @import (reference) "../../assets/less/utils/index";

    #homePageView {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    #header {
        height: 40px;
        width: 100%;
        line-height: 40px;
        text-indent: 15px;
        font-size: 30px;
        box-sizing: border-box;
        background-color: #333333;
        a {
            color: @main-color;
        }
    }
    #main {
        height: ~"calc(100% - 40px)";
        width: 100%;
    }
    .login-info {
        float: right;
        margin-right: 10px;
        font-size: 15px;
        line-height: 40px;
        color: #fff;
        a {
            margin-left: 10px;
        }
    }
</style>
