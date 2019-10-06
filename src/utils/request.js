import axios from 'axios'
import {MessageBox} from 'element-ui'
import {StorageKey} from "@/config/common";
axios.defaults.withCredentials = true;
const pendding = [];
const CancelToken = axios.CancelToken;
const removePendding = (event) => {
    for(let p in pendding){
        if(pendding[p].u === event.url + '&' + event.method) { //当当前请求在数组中存在时执行函数体
            pendding[p].f(); //执行取消操作
            pendding.splice(p, 1); //把这条记录从数组中移除
            break;
        }
    }
}


let IsForTest = process.env.VUE_APP_FOR_TEST;
console.log(IsForTest);
const service = axios.create({
    baseURL: IsForTest ? 'http://114.116.131.184:8081/' : 'http://114.116.131.184:8080/',
    timeout: 5000
});

axios.interceptors.request.use(
    config => {
        console.log(config);
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }

        removePendding(config);
        config.cancelToken = new CancelToken(c=> {
            pendding.push({u: config.url + "& " + config.method, f: c})
        });

        return config;
    },
    error => {
        error.errorMsg = decodeURI(error.response.headers.errormsg) || "未知错误"
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        if(response.headers.errorCode == 412 || response.headers.errorcode == 412) {
            MessageBox.alert("登录超时，请重新登录", "提示").then(e=> {
                window.location.href = "/#/login";
            });
            return;
        }

        removePendding(response.config);
        if(!!+response.headers.errorcode || response.headers.errormsg || response.headers.errorMsg) {
            let errorMsg = decodeURI(response.headers.errormsg || response.headers.errorMsg) || "未知错误"
            return Promise.reject({
                errorCode: response.headers.errorcode,
                errorMsg: errorMsg
            });
        }

        return response.data
    },
    error => {
        if(error.response.headers.errorCode == 412 || error.response.headers.errorcode == 412) {
            MessageBox.alert("登录超时，请重新登录", "提示").then(e=> {
                window.location.href = "/#/login";
            });
            return;
        }

        error.errorMsg = decodeURI(error.response.headers.errormsg) || "未知错误";
        return Promise.reject(error)
    })

function checkStatus(response) {
    return response
}

const request = (config) => {
    if(!config.headers) {
        config.headers = {};
    }
    config.headers["token"] = localStorage.getItem(StorageKey.UserTokenInfo) || "";
    return service.request(config).then(checkStatus).catch(e=> {
        // Message({
        //     type: "error",
        //     message: e.errorMsg
        // });

        return Promise.reject(e);
    });
}

export const GET = (url, data, config) => {
    const CONF = {
        url,
        method: 'get',
        params: data,
    }
    return request({...CONF, ...config})
}

export const POST = (url, data, config) => {
    const CONF = {
        url,
        method: 'post',
        data,
    }
    return request({...CONF, ...config})
}

export const PUT = (url, data, config) => {
    const CONF = {
        url,
        method: 'put',
        data,
    }
    return request({...CONF, ...config})
}

export const DELETE = (url, data, config) => {
    const CONF = {
        url,
        method: 'delete',
        data,
    }
    return request({...CONF, ...config})
}
