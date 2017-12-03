import {takeEvery, takeLatest} from 'redux-saga';
import {put, call} from 'redux-saga/effects';
import 'babel-polyfill';

import {
    SAVE_ARTICLE_LIST,
    REQUEST_ARTICLE,
    SUBMIT_ARTICLE,
    REQUEST_ARTICLE_SUCCESS,
    REQUEST_ARTICLE_FAILED,
    SUBMIT_ARTICLE_SUCCESS,
    SUBMIT_ARTICLE_FAILED
} from '../action/actionType'
import { requestArticle, submitArticle } from "../controllers/index";

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
            yield put({type: SUBMIT_ARTICLE_SUCCESS,payload: true})
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