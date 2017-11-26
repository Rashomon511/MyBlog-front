import {handleActions} from 'redux-actions';

const initState = {
    data:[],
    loginState: false
};

const reducer = handleActions({
    REQUEST_LOGIN: (state) => ({
        ...state
    }),
    REQUEST_SUCCESS: (state, action) => ({
        ...state,data: action.payload
    }),
    REQUEST_ERR: (state, action) => ({
        ...state,loginState: action.payload
    }),
}, initState);

export default {initState, reducer};