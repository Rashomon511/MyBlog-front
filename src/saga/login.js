import {takeEvery, takeLatest} from 'redux-saga'
import {put, call, select} from 'redux-saga/effects'
import 'babel-polyfill';

import {
    REQUEST_LOGIN,
    REQUEST_SUCCESS,
    REQUEST_ERR
} from '../action/actionType'
import { GetUser } from "../controllers/index";
function* fetchLogin() {
    try {
        const data = yield call(GetUser);
        yield put({type: REQUEST_SUCCESS,payload:data})
    }
    catch (err){
        yield  put({type: REQUEST_ERR, payload: false })
    }

}

export function* watchLogin() {
    yield takeLatest(REQUEST_LOGIN, fetchLogin);
}