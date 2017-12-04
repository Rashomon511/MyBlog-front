import {handleActions} from 'redux-actions';

const initState = {
    articleList: [],
    requestState: false,
    submitState: false,
    deleteState: false,
    editState: false
};

const reducer = handleActions({
    SAVE_ARTICLE_LIST: (state,action) => ({
        ...state, articleList: action.payload
    }),
    REQUEST_ARTICLE_SUCCESS: (state,action) => ({
        ...state, requestState: action.payload
    }),
    REQUEST_ARTICLE_FAILED: (state,action) => ({
        ...state, requestState: action.payload
    }),
    SUBMIT_ARTICLE_SUCCESS: (state,action) => ({
        ...state, submitState: action.payload
    }),
    SUBMIT_ARTICLE_FAILED: (state,action) => ({
        ...state, submitState: action.payload
    }),
    DELETE_ARTICLE_SUCCESS: (state,action) => ({
        ...state, deleteState: action.payload
    }),
    DELETE_ARTICLE_FAILED: (state,action) => ({
        ...state, deleteState: action.payload
    }),
    EDITOR_ARTICLE_SUCCESS: (state,action) => ({
        ...state, editState: action.payload
    }),
    EDITOR_ARTICLE_FAILED: (state,action) => ({
        ...state, editState: action.payload
    }),
}, initState);

export default {initState, reducer};