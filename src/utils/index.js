import axios from 'axios';
import { browserHistory } from 'react-router';
import Cookies from 'js-cookie';
import { message } from 'antd';

const fetch = axios.create({
    baseURL: 'http://127.0.0.1:3001/api', // api的base_url
    timeout: 500000                  // 请求超时时间
});

fetch.interceptors.request.use(config => {
    // Do something before request is sent
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    if(Cookies.get('token') !== undefined){
        config.headers['authorization'] = Cookies.get('token') // 让每个请求携带token--['authorization']
    }
    return config
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error)
});

// respone拦截器
fetch.interceptors.response.use(
    response => {
        //console.log(response.data)
        if(response.data.code === 300 ){
            browserHistory.push('/login');
            message.error('token过期！请重新登陆');
            return response.data;
        }
        if(response.data.code === 400){
            message.error(response.data.msg);
            return response.data;
        }
        return response.data;
    },
    error => {
        console.log('err' + error);// for debug
        browserHistory.push('/404');
        return Promise.reject(error)
    }
)

export default fetch