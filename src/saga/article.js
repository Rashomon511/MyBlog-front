import {put, call, takeEvery} from 'redux-saga/effects';
import {message} from 'antd';

import {
    SAVE_ARTICLE_LIST,
    SAVE_ARTICLE_CONTENT,
    REQUEST_ARTICLE,
    SUBMIT_ARTICLE,
    DELETE_ARTICLE,
    GET_ARTICLE,
    REQUEST_ARTICLE_SUCCESS,
    REQUEST_ARTICLE_FAILED,
    SUBMIT_ARTICLE_SUCCESS,
    SUBMIT_ARTICLE_FAILED,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAILED,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILED,
} from '../action/actionType'
import { requestArticle, submitArticle, deleteArticle, getArticleById } from "../controllers/index";

function* RequestArticle() {
    try {
        const data = yield call(requestArticle);
        if(data.code === 200){
            yield put({type: SAVE_ARTICLE_LIST, payload: data.data});
            yield put({type: REQUEST_ARTICLE_SUCCESS,payload: true})
        }else{
            yield  put({type: REQUEST_ARTICLE_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: REQUEST_ARTICLE_FAILED, payload: false })
    }

}

export function* watchRequestArticle() {
    yield takeEvery(REQUEST_ARTICLE, RequestArticle);
}

function *SubmitArticle(action) {
    try {
        const data = yield call(submitArticle,action.payload);
        if(data.code === 200){
            yield put({type: SUBMIT_ARTICLE_SUCCESS,payload: true});
            message.success('新建文章成功！');
        }else{
            yield  put({type: SUBMIT_ARTICLE_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: SUBMIT_ARTICLE_FAILED, payload: false })
    }
}

export function* watchSubmitArticle() {
    yield takeEvery(SUBMIT_ARTICLE, SubmitArticle);
}

function *GetArticleById(action) {
    try {
        const data = yield call(getArticleById,action.payload);
        if(data.code === 200){
            yield put({type: SAVE_ARTICLE_CONTENT, payload: data.data[0]});
            yield put({type: GET_ARTICLE_SUCCESS,payload: true})
        }else{
            yield  put({type: GET_ARTICLE_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: GET_ARTICLE_FAILED, payload: false })
    }
}

export function* watchGetArticleById() {
    yield takeEvery(GET_ARTICLE, GetArticleById);
}


function *DeleteArticle(action) {
    try {
        const data = yield call(deleteArticle,action.payload);
        if(data.code === 200){
            yield  put({type: REQUEST_ARTICLE});
            yield put({type: DELETE_ARTICLE_SUCCESS,payload: true});
            message.success('删除文章成功！');
        }else{
            yield  put({type: DELETE_ARTICLE_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: DELETE_ARTICLE_FAILED, payload: false })
    }
}

export function* watchDeleteArticle() {
    yield takeEvery(DELETE_ARTICLE, DeleteArticle);
}