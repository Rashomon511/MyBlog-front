import fetch from '../utils/index';

export const GetUser = () => {
    return fetch({url:'/user'})
}