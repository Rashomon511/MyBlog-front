import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.10.135:3001';
/*axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;*/
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

export const GetUser = () => {
    return axios.get('/user/')
}