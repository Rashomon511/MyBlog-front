import {handleActions} from 'redux-actions';

const initState = {
    resume: {},
    requestState: false,
    submitState: false
};

const reducer = handleActions({
    SAVE_RESUME: (state,action) => ({
        ...state, resume: action.payload
    }),
    REQUEST_RESUME_SUCCESS: (state,action) => ({
        ...state, requestState: action.payload
    }),
    REQUEST_RESUME_FAILED: (state,action) => ({
        ...state, requestState: action.payload
    }),
    SUBMIT_RESUME_SUCCESS: (state,action) => ({
        ...state, submitState: action.payload
    }),
    SUBMIT_RESUME_FAILED: (state,action) => ({
        ...state, submitState: action.payload
    }),
}, initState);

export default {initState, reducer};