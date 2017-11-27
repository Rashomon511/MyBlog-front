
// action 函数
import {createAction} from 'redux-actions';

export const request_login = createAction('REQUEST_LOGIN');

export const request_success = createAction('REQUEST_SUCCESS');

export const request_err = createAction('REQUEST_ERR');

export const save_token = createAction('SAVE_TOKEN');

