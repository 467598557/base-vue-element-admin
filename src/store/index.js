import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import tab from './modules/tab'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        menu,
        tab,
        user
    }
})
