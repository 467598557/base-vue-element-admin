export default {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        UPDATE(state, item) {
            let list = state.list;
            for(let i=0, len=list.length; i<len; i++) {
                let _item = list[i];
                if(_item.id == item.id) {
                    Object.assign(_item, item);
                    break;
                }
            }
        },
        ADD(state, item) {
            let list = state.list;
            for(let i=0, len=list.length; i<len; i++) {
                if(list[i].id == item.id) {
                    return false;
                }
            }

            state.list.push(item);
        },
        DELETE(state, item) {
            let list = state.list;
            for(let i=list.length-1; i>-1; i--) {
                if(list[i].id == item.id) {
                    list.splice(i, 1);
                }
            }
        }
    },
    getters: {
        list(state) {
            return state.list;
        }
    }
}
