export default {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        UPDATE(state, list) {
            state.list = list;
        }
    }
}
