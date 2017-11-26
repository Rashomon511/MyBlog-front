import fetch from '../utils/index';

export const login = () => {
    return fetch({url:'/user'})
};