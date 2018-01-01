import {handleActions} from 'redux-actions';

const initState = {
    comment: [],
    allComment: {},
    total:0,
    page: {},
    getAllState: false,
    requestState: false,
    submitState: false,
    deleteState: false,
    changeState: false,
};

const reducer = handleActions({
    SAVE_COMMENT: (state,action) => ({
        ...state, comment: action.payload
    }),
    SAVE_NUMBER: (state,action) => ({
        ...state, total: action.payload
    }),
    SAVE_ALL_COMMENT: (state,action) => ({
        ...state, allComment: action.payload
    }),
    SAVE_PAGE: (state,action) => ({
        ...state, page: action.payload
    }),
    GET_ALL_COMMENT_FAILED: (state,action) => ({
        ...state, getAllState: action.payload
    }),
    GET_ALL_COMMENT_SUCCESS: (state,action) => ({
        ...state, getAllState: action.payload
    }),
    GET_COMMENT_SUCCESS: (state,action) => ({
        ...state, requestState: action.payload
    }),
    GET_COMMENT_FAILED: (state,action) => ({
        ...state, requestState: action.payload
    }),
    SUBMIT_COMMENT_SUCCESS: (state,action) => ({
        ...state, submitState: action.payload
    }),
    SUBMIT_COMMENT_FAILED: (state,action) => ({
        ...state, submitState: action.payload
    }),
    DELETE_COMMENT_SUCCESS: (state,action) => ({
        ...state, deleteState: action.payload
    }),
    DELETE_COMMENT_FAILED: (state,action) => ({
        ...state, deleteState: action.payload
    }),
    CHANGE_STATE_SUCCESS: (state,action) => ({
        ...state, changeState: action.payload
    }),
    CHANGE_STATE_FAILED: (state,action) => ({
        ...state, changeState: action.payload
    }),
}, initState);

export default {initState, reducer};