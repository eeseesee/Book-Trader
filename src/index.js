import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import Resources from './components/resources';
import Login from './components/login';
import Signup from './components/signup';

import reducers from './reducers';
import Async from './middlewares/async';
import requireAuth from './components/require_authentication';
import requireUNAuth from './components/require_UNauthentication';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
        <Route path="signup" component={requireUNAuth(Signup)} />
        <Route path="login" component={requireUNAuth(Login)} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
