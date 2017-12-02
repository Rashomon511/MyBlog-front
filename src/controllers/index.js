import fetch from '../utils/index';

// 登陆
export const login = (data) => {
    return fetch({url:'/login',method: 'POST', data})
};

// 获取标签
export const fetchTags = () => {
    return fetch({url:'/getTags', method: 'GET'})
};

// 创建标签
export const createTag = (data) => {
    return fetch({url:'/createTags', method: 'POST', data})
};

// 删除标签
export const deleteTag = (data) => {
    return fetch({url:'/deleteTags', method: 'POST', data})
};