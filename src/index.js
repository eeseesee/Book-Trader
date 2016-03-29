import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './components/app';
import AllBooks from './components/allbooks';
import UserBooks from './components/userbooks';
import Login from './components/login';
import Signup from './components/signup';
import NotFound from './components/notfound';
import Settings from './components/settings';
import UserDashboard from './components/userdashboard';
import AddBook from './components/addbook';
import UserRequests from './components/userrequests';
import AllBooksDashboard from './components/allbooksdashboard';

import reducers from './reducers';
import Async from './middlewares/async';
import requireAuth from './components/require_authentication';
import requireUNAuth from './components/require_UNauthentication';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(Async, loggerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="mybooks" component={requireAuth(UserBooks)}>
          <Redirect from="settings" to="/settings" />
          <IndexRoute component={UserDashboard} />
        </Route>
        <Route component={requireAuth(UserBooks)}>
          <Route path="settings" component={Settings} />
          <Route path="addbook" component={AddBook} />
          <Route path="requests" component={UserRequests} />
        </Route>
        <Route path="books" component={requireAuth(AllBooks)}>
          <IndexRoute component={AllBooksDashboard} />
        </Route>
        <Route path="signup" component={requireUNAuth(Signup)} />
        <Route path="login" component={requireUNAuth(Login)} />
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
