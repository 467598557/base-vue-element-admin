export default [
    {
        path: 'base/goods',
        component: () => import("views/base/goods/index.vue"),
        meta: {
            title: "商品信息"
        },
        children: [
            {
                path: "",
                component: ()=> import("views/base/goods/list.vue")
            }, {
                path: "detail",
                component: ()=> import("views/base/goods/detail.vue"),
                meta: {
                    title: "商品详情"
                }
            }
        ]
    }, {
        path: "base/customer",
        component: () => import("views/base/customer/index.vue"),
        meta: {
            title: "客户信息"
        },
        children: [
            {
                path: "",
                component: ()=> import("views/base/customer/list.vue")
            }, {
                path: "detail",
                component: ()=> import("views/base/customer/detail.vue"),
                meta: {
                    title: "客户详情"
                }
            }
        ]
    }
]

