import fetch from '../utils/index';

// 调用接口
export const login = (data) => {
    return fetch({url:'/login',method: 'POST', data})
};