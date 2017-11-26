import { fork } from 'redux-saga/effects'
import 'babel-polyfill';
export default function* rootSaga() {
    yield [
        fork(watchLogin),
    ]
}