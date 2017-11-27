import {handleActions} from 'redux-actions';

const initState = {
    data:[],
    token:'',
    loginState: false
};

const reducer = handleActions({
    REQUEST_LOGIN: (state,action) => ({
        ...state, data: action.payload
    }),
    SAVE_TOKEN: (state, action) => ({
        ...state,token: action.payload
    }),
    REQUEST_SUCCESS: (state, action) => ({
        ...state,loginState: action.payload
    }),
    REQUEST_ERR: (state, action) => ({
        ...state,loginState: action.payload
    }),
}, initState);

export default {initState, reducer};