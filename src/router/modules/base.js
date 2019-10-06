import {InventoryType} from 'config/common';

export default [
    {
        path: 'base/goods',
        component: () => import("views/base/goods/index.vue"),
        children: [
            {
                path: "",
                component: ()=> import("views/base/goods/list.vue")
            }, {
                path: "detail/:id",
                component: ()=> import("views/base/goods/detail.vue")
            }
        ]
    }, {
        path: "base/customer",
        component: () => import("views/base/customer/index.vue"),
        children: [
            {
                path: "",
                component: ()=> import("views/base/customer/list.vue")
            }, {
                path: "detail/:id",
                component: ()=> import("views/base/customer/detail.vue")
            }
        ]
    }
]

