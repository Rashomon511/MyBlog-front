import {put, call, takeEvery} from 'redux-saga/effects';
import {message} from 'antd';
import {
    SAVE_RESUME,
    REQUEST_RESUME,
    SUBMIT_RESUME,
    REQUEST_RESUME_SUCCESS,
    REQUEST_RESUME_FAILED,
    SUBMIT_RESUME_SUCCESS,
    SUBMIT_RESUME_FAILED
} from '../action/actionType'
import { requestResume, submitResume } from "../controllers/index";

function* RequestResume() {
    try {
        const data = yield call(requestResume);
        if(data.code === 200){
            yield put({type: SAVE_RESUME, payload: data.data});
            yield put({type: REQUEST_RESUME_SUCCESS,payload: true})
        }else{
            yield  put({type: REQUEST_RESUME_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: REQUEST_RESUME_FAILED, payload: false })
    }

}

export function* watchRequestResume() {
    yield takeEvery(REQUEST_RESUME, RequestResume);
}

function *SubmitResume(action) {
    try {
        const data = yield call(submitResume,action.payload);
        if(data.code === 200){
            message.success('提交简历成功！');
            yield  put({type: REQUEST_RESUME});
            yield put({type: SUBMIT_RESUME_SUCCESS,payload: true})
        }else{
            yield  put({type: SUBMIT_RESUME_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: SUBMIT_RESUME_FAILED, payload: false })
    }
}

export function* watchSubmitResume() {
    yield takeEvery(SUBMIT_RESUME, SubmitResume);
}