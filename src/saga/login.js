import {takeEvery, takeLatest} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import 'babel-polyfill';

import {
    REQUEST_LOGIN,
    REQUEST_SUCCESS,
    REQUEST_ERR
} from '../action/actionType'
import { login } from "../controllers/index";
function* fetchLogin(action) {
    try {
        const data = yield call(login,action.payload);
        console.log(data);
        yield put({type: REQUEST_SUCCESS,payload: true})
    }
    catch (err){
        yield  put({type: REQUEST_ERR, payload: false })
    }

}

export function* watchLogin() {
    yield takeEvery(REQUEST_LOGIN, fetchLogin);
}