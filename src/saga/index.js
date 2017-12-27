import { fork } from 'redux-saga/effects'
import {watchLogin} from './login';
import {watchTags, watchCreateTag, watchDeleteTag} from './tags';
import {watchRequestResume,watchSubmitResume} from './resume';
import {watchSubmitComment,watchRequestComment,watchGetComment,watchChangeComment,watchDeleteComment} from './comment';
import {watchRequestArticle,watchSubmitArticle,watchDeleteArticle,watchGetArticleById,watchGetArticleList} from './article';
export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchTags),
        fork(watchCreateTag),
        fork(watchDeleteTag),
        fork(watchRequestResume),
        fork(watchSubmitResume),
        fork(watchRequestArticle),
        fork(watchSubmitArticle),
        fork(watchGetArticleById),
        fork(watchDeleteArticle),
        fork(watchGetArticleList),
        fork(watchRequestComment),
        fork(watchSubmitComment),
        fork(watchDeleteComment),
        fork(watchGetComment),
        fork(watchChangeComment)
    ]
}