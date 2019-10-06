import {LocalstorageKey} from 'config/common';

let user = {};
try {
    user = JSON.parse(localStorage.getItem(LocalstorageKey.Login_User_Info));
} catch (e) {
}
export default {
    namespaced: true,
    state: {
        user: user
    },
    mutations: {
        UPDATE(state, user) {
            state.user = user;
            localStorage.setItem(LocalstorageKey.Login_User_Info, JSON.stringify(user));
        }
    }
}

