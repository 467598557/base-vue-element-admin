import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseRouter from './modules/base'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import("views/login/index.vue")
        }, {
            path: '/login',
            component: () => import("views/login/index.vue")
        }, {
            path: '/dashboard',
            name: '首页',
            component: () => import("views/dashboard/index.vue"),
            children: [
                {
                    path: '',
                    component: () => import("views/main/index.vue"),
                    children: BaseRouter
                }
            ]
        }, {
            path: '*',
            component: () => import("views/404/index.vue")
        }
    ]
});

export default router;
