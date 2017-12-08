import {handleActions} from 'redux-actions';

const initState = {
    articleList: [],
    articleContent: {},
    requestState: false,
    submitState: false,
    deleteState: false,
    getState: false
};

const reducer = handleActions({
    SAVE_ARTICLE_LIST: (state,action) => ({
        ...state, articleList: action.payload
    }),
    SAVE_ARTICLE_CONTENT: (state,action) => ({
        ...state, articleContent: action.payload
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
    GET_ARTICLE_SUCCESS: (state,action) => ({
        ...state, getState: action.payload
    }),
    GET_ARTICLE_FAILED: (state,action) => ({
        ...state, getState: action.payload
    }),
}, initState);

export default {initState, reducer};