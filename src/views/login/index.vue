<template>
    <section id="loginView">
        <el-form :model="ruleForm2" :rules="rules2"
                 status-icon
                 ref="ruleForm2"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model="ruleForm2.username"
                          auto-complete="off"
                          placeholder="用户名"
                          @keyup.enter.native="handleSubmit"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="ruleForm2.password"
                          auto-complete="off"
                          placeholder="密码"
                          @keyup.enter.native="handleSubmit"
                ></el-input>
            </el-form-item>
            <el-checkbox
                v-model="isRemember"
                class="rememberme"
            >记住密码
            </el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                logining: false,
                ruleForm2: {
                    username: 'admin',
                    password: 'admin',
                },
                rules2: {
                    username: [{required: true, message: '请输入您的登录账户', trigger: 'blur'}],
                    password: [{required: true, message: '请输入您的登录密码', trigger: 'blur'}]
                },
                isRemember: true
            }
        },
        methods: {
            handleSubmit(event) {
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        this.logining = true;

                        setTimeout(()=> {
                            this.$store.commit("user/UPDATE", {
                                accountName: "admin",
                                nickName: "管理员"
                            });
                            this.$store.commit("menu/UPDATE", [
                                    {
                                        id: 1,
                                        text: "基本",
                                        path: "",
                                        children: [{
                                            id: 11,
                                            text: "商品信息",
                                            path: "/dashboard/base/goods"
                                        }, {
                                            id: 12,
                                            text: "客户信息",
                                            path: "/dashboard/base/customer"
                                        }]
                                    }, {
                                        id: 2,
                                        text: "库存",
                                        children: [
                                            {
                                                id: 21,
                                                text: "盘点信息"
                                            }, {
                                                id: 22,
                                                text: "库存信息"
                                            }
                                        ]
                                    }, {
                                        id: 3,
                                        text: "采购",
                                        children: [
                                            {
                                                id: 31,
                                                text: "采购信息"
                                            }
                                        ]
                                    }, {
                                        id: 4,
                                        text: "销售",
                                        children: [{
                                            id: 41,
                                            text: "销售信息"
                                        }]
                                    }, {
                                        id: 5,
                                        text: "财务",
                                        children: [{
                                            id: 41,
                                            text: "财务总计"
                                        }]
                                    }, {
                                        id: 6,
                                        text: "系统",
                                        children: [{
                                            id: 41,
                                            text: "系统设置"
                                        }]
                                    }, {
                                        id: 7,
                                        text: "数据",
                                        children: [{
                                            id: 41,
                                            text: "数据信息"
                                        }]
                                    }
                                ]);
                            this.$router.push('/dashboard');
                        }, 1000);
                    } else {
                        return false;
                    }
                })
            }
        }
    };
</script>

<style type="text/css" lang="less" scoped>
    @import (reference) '../../assets/less/utils/index';

    #loginView {
        .rect;
        background: url(../../assets/bg.jpg) no-repeat center center;
        background-size: 100% 100%;
        padding-top: 180px;
        box-sizing: border-box;
        .title {
            text-align: center;
            font-size: 20px;
            margin-bottom: 15px;
        }
        .login-page {
            -webkit-border-radius: 5px;
            border-radius: 5px;
            width: 350px;
            margin: 0px auto;
            padding: 35px 35px 15px;
            background: #fff;
            border: 1px solid #eaeaea;
            box-shadow: 0 0 25px #cac6c6;
        }
        label.el-checkbox.rememberme {
            margin: 0px 0px 15px;
            text-align: left;
        }
    }
</style>
