import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import store from './store';
import App from './App';
import Index from './containers/Blog/index';
import Home from './containers/Backend/Home';
import Login from './containers/Backend/Login';

const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index}/>
                <Route path="login" components={Login}/>
                <Route path="home" components={Home}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));