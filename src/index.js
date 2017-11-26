import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import store from './store';
import App from './App';
import Index from './containers/Blog/index';
import Tags from './containers/Blog/Tags';
import AboutMe from './containers/Blog/Resume';
import ArticleList from './containers/Blog/ArticleList';
import TagList from './containers/Blog/TagList';
import ArticleContent from './containers/Blog/ArticleContent';
import Login from './containers/Backend/Login';
import Home from './containers/Backend/Home';
import Resume from './containers/Backend/Resume';
import ArticleManage from './containers/Backend/ArticleManage';
import NewArticle from './containers/Backend/NewArticle';
import TagsManage from './containers/Backend/TagsManage';
import MsgManage from './containers/Backend/MsgManage';
import './stylesheets/index.js';

// import {configureStore} from './store';
// 第二种写发
// const store = configureStore();

const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to='/main' />
                <Route path='main' component={Index}>
                    <IndexRedirect to='/main/article' />
                    <Route path='article' component={ArticleList}/>
                    <Route path='tags' component={Tags}/>
                    <Route path='resume' component={AboutMe}/>
                    <Route path='tagList' component={TagList}/>
                    <Route path='showArticle' component={ArticleContent}/>
                </Route>
                <Route path="login" component={Login}/>
                <Route path="home" component={Home}>
                    <Route path="resume" component={Resume}/>
                    <Route path="articleMge" component={ArticleManage}/>
                    <Route path="newArticle" component={NewArticle}/>
                    <Route path="TagsMge" component={TagsManage}/>
                    <Route path="msgManage" component={MsgManage}/>
                </Route>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));