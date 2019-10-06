export default {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        UPDATE_TAB(state, item) {
            let list = state.list;
            for(let i=0, len=list.length; i<len; i++) {
                let _item = list[i];
                if(_item.ID == item.ID) {
                    Object.assign(_item, item);
                    break;
                }
            }
        },
        ADD(state, item) {
            let list = state.list;
            for(let i=0, len=list.length; i<len; i++) {
                if(list[i].ID == item.ID) {
                    return false;
                }
            }

            state.list.push(item);
        },
        DELETE(state, item) {
            let list = state.list;
            for(let i=list.length-1; i>-1; i--) {
                if(list[i].ID == item.ID) {
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