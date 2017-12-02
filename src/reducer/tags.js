import {handleActions} from 'redux-actions';

const initState = {
    tags: [],
    loading: true,
    createState: false,
    deleteState: false
};

const reducer = handleActions({
    SAVE_TAGS: (state,action) => ({
        ...state, tags: action.payload
    }),
    REQUEST_TAGS_LOADING: (state,action) => ({
        ...state, loading: action.payload
    }),
    CREATE_TAG_SUCCESS: (state,action) => ({
        ...state, createState: action.payload
    }),
    CREATE_TAG_FAILED: (state,action) => ({
        ...state, createState: action.payload
    }),
    DELETE_TAG_SUCCESS: (state,action) => ({
        ...state, deleteState: action.payload
    }),
    DELETE_TAG_FAILED: (state,action) => ({
        ...state, deleteState: action.payload
    }),
}, initState);

export default {initState, reducer};