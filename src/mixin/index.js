import User from './user';
import Breadcrumb from './breadcrumb';

export default {
    install(Vue) {
        [User, Breadcrumb].forEach(item=> {
            Vue.use(item);
        });
    }
}
