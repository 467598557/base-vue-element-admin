export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                $updateTab(item) {
                    this.$store.commit("tab/UPDATE", item);

                    return this;
                }
            }
        });
    }
}

