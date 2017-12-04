import {put, call, takeEvery} from 'redux-saga/effects';
import {message} from 'antd';

import {
    SAVE_ARTICLE_LIST,
    REQUEST_ARTICLE,
    SUBMIT_ARTICLE,
    DELETE_ARTICLE,
    EDITOR_ARTICLE,
    REQUEST_ARTICLE_SUCCESS,
    REQUEST_ARTICLE_FAILED,
    SUBMIT_ARTICLE_SUCCESS,
    SUBMIT_ARTICLE_FAILED,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAILED,
    EDITOR_ARTICLE_SUCCESS,
    EDITOR_ARTICLE_FAILED
} from '../action/actionType'
import { requestArticle, submitArticle, deleteArticle, editorArticle } from "../controllers/index";

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

function *EditorArticle(action) {
    try {
        const data = yield call(editorArticle,action.payload);
        if(data.code === 200){
            yield put({type: EDITOR_ARTICLE_SUCCESS,payload: true})
        }else{
            yield  put({type: EDITOR_ARTICLE_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: EDITOR_ARTICLE_FAILED, payload: false })
    }
}

export function* watchEditArticle() {
    yield takeEvery(EDITOR_ARTICLE, EditorArticle);
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