import {mapGetters} from 'vuex';

export default {
    install(Vue) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    "$user": "user/user"
                })
            }
        });
    }
}

