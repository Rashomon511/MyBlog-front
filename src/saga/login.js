import {put, call, takeEvery} from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { browserHistory } from 'react-router';

import {
    REQUEST_LOGIN,
    REQUEST_SUCCESS,
    REQUEST_ERR,
} from '../action/actionType'
import { login } from "../controllers/index";
function* fetchLogin(action) {
    try {
        const data = yield call(login,action.payload);
        if(data.code === 200){
            localStorage.setItem('auth', data.result.auth );
            Cookies.set('token',data.result.token);
            browserHistory.push('/home');
            yield put({type: REQUEST_SUCCESS,payload: true})

        }else{
            yield  put({type: REQUEST_ERR, payload: false })
        }
    }
    catch (err){
        yield  put({type: REQUEST_ERR, payload: false })
    }

}

export function* watchLogin() {
    yield takeEvery(REQUEST_LOGIN, fetchLogin);
}