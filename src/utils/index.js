import axios from 'axios';

const fetch = axios.create({
    baseURL: 'http://192.168.10.135:3001', // api的base_url
    timeout: 500000                  // 请求超时时间
})

fetch.interceptors.request.use(config => {
    // Do something before request is sent
    config.headers['Content-Type'] = 'appliction/x-www-form-urlencoded';
    //config.headers['Authorization'] = getToken() // 让每个请求携带token--['Authorization']
    return config
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error)
})

// respone拦截器
fetch.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error);// for debug
        return Promise.reject(error)
    }
)

export default fetch