import App from './App.vue'
import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import 'assets/less/reset.less'
import 'assets/less/base.less'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';
import mixin from 'mixin';

if(process.env.NODE_ENV == "development") {
    Vue.use(ElementUI);
}

// Vue.config.productionTip = false;
Vue.use(mixin);
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');


