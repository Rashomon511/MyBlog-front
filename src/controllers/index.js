import fetch from '../utils/index';

export const login = (data) => {
    return fetch({url:'/login',method: 'POST', data})
};