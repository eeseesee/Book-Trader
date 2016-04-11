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
import HomePage from './views/home-page';

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
import About from './dummies/about';

// Redux and Middlewares
import reducers from './reducers';
import Async from './middlewares/async';
import requireAuth from './containers/require-authentication';
import requireUNAuth from './containers/require-UNauthentication';

const middlewares = [Async];
// Note: uncomment the following lines for action logger in the console during development
//const loggerMiddleware = createLogger();
//middlewares.push(loggerMiddleware);
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={About} />
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
  , document.getElementById('root'));
