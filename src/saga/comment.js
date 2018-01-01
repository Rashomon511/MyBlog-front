import {put, call, takeEvery, select} from 'redux-saga/effects';
import {message} from 'antd';
import {
    SAVE_COMMENT,
    SAVE_NUMBER,
    SAVE_ALL_COMMENT,
    GET_COMMENT,
    GET_ALL_COMMENT,
    SUBMIT_COMMENT,
    DELETE_COMMENT,
    CHANGE_STATE,
    SAVE_PAGE,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAILED,
    SUBMIT_COMMENT_SUCCESS,
    SUBMIT_COMMENT_FAILED,
    GET_ALL_COMMENT_FAILED,
    GET_ALL_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILED,
    DELETE_COMMENT_SUCCESS,
    CHANGE_STATE_FAILED,
    CHANGE_STATE_SUCCESS
} from '../action/actionType'
import { requestComment, submitComment, getComment, deleteComment, changeComment } from "../controllers/index";

function* RequestComment(action) {
    try {
        const data = yield call(requestComment, action.payload);
        if(data.code === 200){
            const comment = data.data.data.concat();
            comment.forEach((item)=>{
                item.reply = false;
            });
            yield put({type: SAVE_COMMENT, payload: comment});
            yield put({type: SAVE_NUMBER, payload: data.data.total});
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

function* ChangeComment(action) {
    try {
        const data = yield call(changeComment, action.payload);
        if(data.code === 200){
            message.success('状态修改成功');
            yield put({type: CHANGE_STATE_SUCCESS,payload: true});
            const page = yield select(state=>state.comment.page);
            yield put({type: GET_ALL_COMMENT, payload: page})
        }else{
            yield  put({type: CHANGE_STATE_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: CHANGE_STATE_FAILED, payload: false })
    }

}

export function* watchChangeComment() {
    yield takeEvery(CHANGE_STATE, ChangeComment);
}

function* GetComment(action) {
    try {
        const data = yield call(getComment, action.payload);
        yield put({type: SAVE_PAGE, payload: action.payload});
        if(data.code === 200){
            yield put({type: SAVE_ALL_COMMENT, payload: data.data});
            yield put({type: GET_ALL_COMMENT_SUCCESS,payload: true})
        }else{
            yield  put({type: GET_ALL_COMMENT_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: GET_ALL_COMMENT_FAILED, payload: false })
    }

}

export function* watchGetComment() {
    yield takeEvery(GET_ALL_COMMENT, GetComment);
}

function* DeleteComment(action) {
    try {
        const data = yield call(deleteComment, action.payload);
        if(data.code === 200){
            yield put({type: DELETE_COMMENT_SUCCESS,payload: true});
            message.success('删除留言成功')
            const page = yield select(state=>state.comment.page);
            yield put({type: GET_ALL_COMMENT, payload: page})
        }else{
            yield  put({type: DELETE_COMMENT_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: DELETE_COMMENT_FAILED, payload: false })
    }

}

export function* watchDeleteComment() {
    yield takeEvery(DELETE_COMMENT, DeleteComment);
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