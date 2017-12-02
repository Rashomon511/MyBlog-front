import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import App from './App';
import Index from './containers/Blog/index'; // 博客展示页面
import Tags from './containers/Blog/Tags'; // 博客展示标签页面
import AboutMe from './containers/Blog/Resume'; // 我的简历
import ArticleList from './containers/Blog/ArticleList'; // 文章列表
import TagList from './containers/Blog/TagList'; //标签列表
import ArticleContent from './containers/Blog/ArticleContent'; //文章具体内容
import Login from './containers/Backend/Login'; //登陆页面
import Home from './containers/Backend/Home'; //后台主控页面
import Resume from './containers/Backend/Resume'; //简历页面
import ArticleManage from './containers/Backend/ArticleManage'; // 文章管理
import NewArticle from './containers/Backend/NewArticle'; //新建文章
import TagsManage from './containers/Backend/TagsManage'; //标签管理
import MsgManage from './containers/Backend/MsgManage'; //留言管理
import ErrorPage from './components/Error/404'; //404页面
import './stylesheets/index.js'; // 全局样式

//import store from './store';
// 第二种写法
import {configureStore} from './store';

const store = configureStore();

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
                <Route path="404" component={ErrorPage}/>
                <Route path="home" component={Home}>
                    <IndexRedirect to='/home/newArticle'/>
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