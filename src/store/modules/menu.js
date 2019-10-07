import {LocalstorageKey} from 'config/common';

let menuList = [];
try {
    menuList = JSON.parse(localStorage.getItem(LocalstorageKey.Login_User_MenuList));
} catch (e) {
}

export default {
    namespaced: true,
    state: {
        list: menuList,
        curSecondMenu: null
    },
    mutations: {
        UPDATE(state, menuList) {
            state.list = menuList;
            localStorage.setItem(LocalstorageKey.Login_User_MenuList, JSON.stringify(menuList));
        },
        SET_CUR_SECOND_MENU(state, menu) {
            state.curSecondMenu = menu;
        }
    },
    getters: {
        getChildrenById: (state) => (id) => {
            let list = state.list || [];
            for (let i = 0, len = list.length; i < len; i++) {
                let menu = list[i];
                if (menu.id == id) {
                    return menu.children;
                }
            }
        },
        curSecondMenu(state) {
            return state.curSecondMenu;
        }
    }
}
