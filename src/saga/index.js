import { fork } from 'redux-saga/effects'
import 'babel-polyfill';
import {watchLogin} from './login';
import {watchTags, watchCreateTag, watchDeleteTag} from './tags';
export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchTags),
        fork(watchCreateTag),
        fork(watchDeleteTag)
    ]
}