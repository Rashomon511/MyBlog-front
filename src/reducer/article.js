import {handleActions} from 'redux-actions';

const initState = {
    articleList: [],
    requestState: false,
    submitState: false
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
}, initState);

export default {initState, reducer};