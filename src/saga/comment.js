import {put, call, takeEvery} from 'redux-saga/effects';
import {message} from 'antd';
import {
    SAVE_COMMENT,
    GET_COMMENT,
    SUBMIT_COMMENT,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAILED,
    SUBMIT_COMMENT_SUCCESS,
    SUBMIT_COMMENT_FAILED
} from '../action/actionType'
import { requestComment, submitComment } from "../controllers/index";

function* RequestComment(action) {
    try {
        const data = yield call(requestComment, action.payload);
        if(data.code === 200){
            yield put({type: SAVE_COMMENT, payload: data.data});
            yield put({type: GET_COMMENT_SUCCESS,payload: true})
        }else{
            yield  put({type: GET_COMMENT_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: GET_COMMENT_FAILED, payload: false })
    }

}

export function* watchRequestComment() {
    yield takeEvery(GET_COMMENT, RequestComment);
}

function *SubmitComment(action) {
    try {
        const data = yield call(submitComment,action.payload);
        if(data.code === 200){
            message.success('提交留言成功，请等待审核！');
            yield put({type: SUBMIT_COMMENT_SUCCESS,payload: true})
        }else{
            yield  put({type: SUBMIT_COMMENT_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: SUBMIT_COMMENT_FAILED, payload: false })
    }
}

export function* watchSubmitComment() {
    yield takeEvery(SUBMIT_COMMENT, SubmitComment);
}