import { fork } from 'redux-saga/effects'
import 'babel-polyfill';
import {watchLogin} from './login';
export default function* rootSaga() {
    yield [
        fork(watchLogin),
    ]
}