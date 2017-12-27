import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
//import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import login from '../reducer/login';
import tags from '../reducer/tags';
import resume from '../reducer/resume';
import article from '../reducer/article';
import comment from '../reducer/comment';
import rootSagas from '../saga/index';

const initState = {
    login:login.initState,
    tags:tags.initState,
    resume: resume.initState,
    article:article.initState,
    comment:comment.initState,
};

const reducers = {
    login:login.reducer,
    tags:tags.reducer,
    resume:resume.reducer,
    article:article.reducer,
    comment:comment.reducer,
};

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
);

/*const store = createStore(
    combineReducers(reducers),
    initState,
    //applyMiddleware(composeWithDevTools())
);*/

// export default store;

// 第二种写法
export const configureStore = () => {
    //加强store
    const store = createStore(
        combineReducers(reducers),
        initState,
        enhancer
    );
    sagaMiddleware.run(rootSagas);
    return store;
};