import {handleActions} from 'redux-actions';

const initState = {
    comment: [],
    requestState: false,
    submitState: false
};

const reducer = handleActions({
    SAVE_COMMENT: (state,action) => ({
        ...state, comment: action.payload
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
}, initState);

export default {initState, reducer};