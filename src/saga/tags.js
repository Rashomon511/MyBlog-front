import {put, call, takeEvery} from 'redux-saga/effects';
import {message} from 'antd';
import { fetchTags, createTag, deleteTag } from "../controllers/index";
import {
    REQUEST_TAGS,
    REQUEST_TAGS_LOADING,
    SAVE_TAGS,
    CREATE_TAG,
    DELETE_TAG,
    CREATE_TAG_SUCCESS,
    CREATE_TAG_FAILED,
    DELETE_TAG_SUCCESS,
    DELETE_TAG_FAILED,
} from '../action/actionType'

// 获取标签
function* fetchTag() {
    try {
        const data = yield call(fetchTags);
        yield  put({type: REQUEST_TAGS_LOADING, payload: true });
        if(data.code === 200){
            yield put({type: SAVE_TAGS,payload: data.data});
            yield put({type: REQUEST_TAGS_LOADING,payload: false})
        }else{
            yield  put({type: REQUEST_TAGS_LOADING, payload: true })
        }
    }
    catch (err){
        yield  put({type: REQUEST_TAGS_LOADING, payload: true })
    }

}

export function* watchTags() {
    yield takeEvery(REQUEST_TAGS, fetchTag);
}

// 创建标签
function* CreateTags(action) {
    try {
        const data = yield call(createTag, action.payload);
        if(data.code === 200){
            message.success('创建标签成功！');
            yield put({type: CREATE_TAG_SUCCESS,payload: true});
            yield put({type: REQUEST_TAGS})
        }else{
            yield  put({type: CREATE_TAG_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: CREATE_TAG_FAILED, payload: false })
    }

}

export function* watchCreateTag() {
    yield takeEvery(CREATE_TAG, CreateTags);
}

// 删除标签
function* DeleteTag(action) {
    try {
        const data = yield call(deleteTag, action.payload);
        if(data.code === 200){
            yield put({type: DELETE_TAG_SUCCESS,payload: true});
            yield put({type: REQUEST_TAGS});
            message.success('删除标签成功！');
        }else{
            yield  put({type: DELETE_TAG_FAILED, payload: false })
        }
    }
    catch (err){
        yield  put({type: DELETE_TAG_FAILED, payload: false })
    }

}

export function* watchDeleteTag() {
    yield takeEvery(DELETE_TAG, DeleteTag);
}
