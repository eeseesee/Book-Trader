import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// Entry
import App from './containers/app';

// App Views
import BookPage from './views/book-page';
import UserPage from './views/user-page';
import RequestsPage from './views/requests-page';

// App Containers
import Login from './containers/login';
import Signup from './containers/signup';
import SettingsPage from './containers/settings';
import UserDashboard from './containers/user-dashboard';
import AddBookPage from './containers/add-book';
import BookDashboard from './containers/book-dashboard';
import RequestsDashboard from './containers/requests-dashboard';

// App Dummy Components
import NotFound from './dummies/not-found';


import reducers from './reducers';
import Async from './middlewares/async';
import requireAuth from './components/Auth/require-authentication';
import requireUNAuth from './components/Auth/require-UNauthentication';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(Async, loggerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="mybooks" component={requireAuth(UserPage)}>
          <Redirect from="settings" to="/settings" />
          <IndexRoute component={UserDashboard} />
        </Route>
        <Route component={requireAuth(UserPage)}>
          <Route path="settings" component={SettingsPage} />
          <Route path="addbook" component={AddBookPage} />
          <Route path="requests" component={RequestsPage} >
            <IndexRoute component={RequestsDashboard} />
          </Route>
        </Route>
        <Route path="library" component={BookPage} >
          <IndexRoute component={BookDashboard} />
        </Route>
        <Route path="signup" component={requireUNAuth(Signup)} />
        <Route path="login" component={requireUNAuth(Login)} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
