<template>
    <section class="main-wrapper">
        <ul>
            <li class="primary-menu-list">
                <ul>
                    <li v-for="item in menuList">
                        <a href="javascript:void(0)"
                           :class="{active:curPrimaryMenu.id==item.id}"
                           @click="changeMenu(item)">{{item.text}}</a>
                    </li>
                </ul>
            </li>
            <li class="second-menu-list">
                <ul v-if="curPrimaryMenu.id">
                    <li v-for="item in curPrimaryMenu.children" v-if="item.text!='消息权限'">
                        <a href="javascript:void(0)"
                           :class="{active:curSecondMenu.id==item.id}"
                           @click="changeSecondMenu(item, curPrimaryMenu)">{{item.text}}</a>
                    </li>
                </ul>
            </li>
            <li class="main-body">
                <div>
                    <div class="tab-list" ref="tagList">
                        <p class="tab-list-wrapper" ref="tagListWrapper">
                            <span :class="{active:curSecondMenu.id==item.id}"
                                  @click="activeTabMenu(item)"
                                  v-for="item in tabList">
                                {{item.text}}
                                <a href="javascript:void(0)" v-if="tabList.length>1" @click="closeTabMenu(item)"
                                   class="el-icon-close"></a>
                            </span>
                        </p>
                        <span class="operate-btn-group" ref="btnGroup">
                            <a href="javascript:void(0)" @click="scroll('left')" class="el-icon-arrow-left"></a>
                            <a href="javascript:void(0)" @click="scroll('right')" class="el-icon-arrow-right"></a>
                        </span>
                    </div>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :key="item.path" v-for="item in breadcrumbList">
                            <router-link v-if="item.path" :to="item.path">{{item.text}}</router-link>
                            <span v-else>{{item.text}}</span>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="main-body-content">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script type="text/javascript">
    import $ from 'jquery';

    export default {
        name: "Main",
        data() {
            return {
                curPrimaryMenu: {},
                curSecondMenu: {}
            }
        },
        computed: {
            tabList() {
                return [];
            },
            breadcrumbList() {
                return this.$store.state.breadcrumb.list;
            },
            menuList() {
                return this.$store.state.menu.list;
            }
        },
        beforeMount() {
            if (this.$route.path === "/dashboard") {
                this.changeMenu(this.menuList[0]);
            }
            this.getMenuByPath();
        },
        mounted() {
            window.addEventListener("resize", () => {
                this.calcBodyContentHeight();
            });
            this.calcBodyContentHeight();
        },
        methods: {
            calcBodyContentHeight() {
              let $mainBodyContent = $(".main-body-content");
                $mainBodyContent.height(window.innerHeight - $mainBodyContent.offset().top);
            },
            changeMenu(menu) {
                this.curPrimaryMenu = menu;
                if (!this.curSecondMenu.id) {
                    this.changeSecondMenu(menu.children[0], menu);
                }
            },
            changeSecondMenu(menu, primaryMenu) {
                if (!menu.parent && primaryMenu) {
                    menu.parent = primaryMenu;
                }

                if (this.curSecondMenu != menu) {
                    // this.$store.commit("tab/ADD", Object.assign({}, menu));
                    this.activeTabMenu(menu);
                }
            },
            activeTabMenu(menu) {
                this.curPrimaryMenu = menu.parent;
                this.curSecondMenu = menu;
                this.$store.commit("menu/SET_CUR_SECOND_MENU", this.curSecondMenu);

                this.$router.push(menu.path);
            },
            closeTabMenu(menu) {
                this.$store.commit("tab/DELETE", menu);

                if (this.tabList.length) {
                    this.$nextTick(() => {
                        this.changeSecondMenu(this.tabList[this.tabList.length - 1])
                    });
                } else {
                    this.curSecondMenu = {};
                    this.$store.commit("menu/SET_CUR_SECOND_MENU", this.curSecondMenu);
                }
            },
            getMenuByPath() {
                let path = this.$route.path;
                let menuList = this.menuList;
                for (let i = 0, len = menuList.length; i < len; i++) {
                    let menu = menuList[i];
                    let children = menu.children || [];
                    for (let j = 0, jLen = children.length; j < jLen; j++) {
                        let childMenu = children[j];
                        if (path.indexOf(childMenu.path) > -1) {
                            childMenu.parent = menu;
                            this.curSecondMenu = childMenu;
                            this.curPrimaryMenu = menu;
                            this.$store.commit("menu/SET_CUR_SECOND_MENU", this.curSecondMenu);
                            this.$store.commit("tab/ADD", Object.assign({}, childMenu));
                            return;
                        }
                    }
                }
            },
            scroll(type) {
                let $dom = $(this.$refs.tagListWrapper);
                switch (type) {
                    case "left":
                        $dom.scrollLeft($dom.scrollLeft() - 150);
                        break;
                    case "right":
                        $dom.scrollLeft($dom.scrollLeft() + 150);
                        break;
                }
            }
        }
    }
</script>

<style type="text/css" lang="less">
    @import "index";
</style>
