export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    $user: this.$store.state.user.user
                }
            }
        });
    }
}

