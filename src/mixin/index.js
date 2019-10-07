import User from './user';
import Tab from './tab';
import Menu from './menu';

export default {
    install(Vue) {
        [User, Tab, Menu].forEach(item=> {
            Vue.use(item);
        });
    }
}

