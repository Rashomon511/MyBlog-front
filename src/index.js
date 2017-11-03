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
import Home from './containers/Backend/Home';
import Login from './containers/Backend/Login';
import './stylesheets/index.js';

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
                </Route>
                <Route path="login" component={Login}/>
                <Route path="home" component={Home}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));