import {takeEvery, takeLatest} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import 'babel-polyfill';

import {
    REQUEST_LOGIN,
    REQUEST_SUCCESS,
    REQUEST_ERR
} from '../action/actionType'
import { login } from "../controllers/index";
function* fetchLogin() {
    try {
        const data = yield call(login);
        console.log('saga-fetch');
        console.log(data);
        yield put({type: REQUEST_SUCCESS,payload:data})
    }
    catch (err){
        yield  put({type: REQUEST_ERR, payload: true })
    }

}

export function* watchLogin() {
    yield takeEvery(REQUEST_LOGIN, fetchLogin);
}