export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                updateBreadcrumb(list) {
                    this.$store.commit("breadcrumb/UPDATE", list);
                }
            }
        });
    }
}

