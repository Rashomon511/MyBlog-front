
// action 函数
import {createAction} from 'redux-actions';

// 登陆页
export const request_login = createAction('REQUEST_LOGIN');

export const request_success = createAction('REQUEST_SUCCESS');

export const request_err = createAction('REQUEST_ERR');

// 标签页

export const request_tags = createAction('REQUEST_TAGS');

export const save_tags = createAction('SAVE_TAGS');

export const create_tag = createAction('CREATE_TAG');

export const delete_tag = createAction('DELETE_TAG');

export const request_tags_loading = createAction('REQUEST_TAGS_LOADING');

export const create_tag_success = createAction('CREATE_TAG_SUCCESS');

export const create_tag_failed = createAction('CREATE_TAG_FAILED');

export const delete_tag_success = createAction('DELETE_TAG_SUCCESS');

export const delete_tag_failed = createAction('DELETE_TAG_FAILED');

// 文章
export const request_article = createAction('REQUEST_ARTICLE');

export const submit_article = createAction('SUBMIT_ARTICLE');

export const get_article = createAction('GET_ARTICLE');

export const get_article_list = createAction('GET_ARTICLE_LIST');

export const delete_article = createAction('DELETE_ARTICLE');

export const save_article_list = createAction('SAVE_ARTICLE_LIST');

export const save_articles_list = createAction('SAVE_ARTICLES_LIST');

export const save_article_content = createAction('SAVE_ARTICLE_CONTENT');

export const save_article_page = createAction('SAVE_ARTICLE_PAGE');

export const request_article_success = createAction('REQUEST_ARTICLE_SUCCESS');

export const request_article_failed = createAction('REQUEST_ARTICLE_FAILED');

export const submit_article_success = createAction('SUBMIT_ARTICLE_SUCCESS');

export const submit_article_failed = createAction('SUBMIT_ARTICLE_FAILED');

export const delete_article_success = createAction('DELETE_ARTICLE_SUCCESS');

export const delete_article_failed = createAction('DELETE_ARTICLE_FAILED');

export const get_article_success = createAction('GET_ARTICLE_SUCCESS');

export const get_article_failed = createAction('GET_ARTICLE_FAILED');

export const get_list_success = createAction('GET_LIST_SUCCESS');

export const get_list_failed = createAction('GET_LIST_FAILED');

// 简历
export const request_resume = createAction('REQUEST_RESUME');

export const submit_resume = createAction('SUBMIT_RESUME');

export const save_resume = createAction('SAVE_RESUME');

export const request_resume_success = createAction('REQUEST_RESUME_SUCCESS');

export const request_resume_failed = createAction('REQUEST_RESUME_FAILED');

export const submit_resume_success = createAction('SUBMIT_RESUME_SUCCESS');

export const submit_resume_failed = createAction('SUBMIT_RESUME_FAILED');

