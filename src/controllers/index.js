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

// 获取简历
export const requestResume = () => {
    return fetch({url:'/getResume', method: 'GET'})
};

// 提交简历
export const submitResume = (data) => {
    return fetch({url:'/saveResume', method: 'POST', data})
};

// 获取文章列表
export const requestArticle = () => {
    return fetch({url:'/getArticle', method: 'GET'})
};

// 提交文章
export const submitArticle = (data) => {
    return fetch({url:'/saveArticle', method: 'POST', data})
};

// 删除文章
export const deleteArticle = (data) => {
    return fetch({url:`/deleteArticle?id=${data}`,method: 'GET'})
};

// 编辑文章
export const getArticleById = (data) => {
    return fetch({url:`/getArticleById?id=${data}`, method: 'GET'})
};
