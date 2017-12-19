import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
        <Route path='/' component={App}/>       
      </Router>
  </Provider>
  , document.querySelector('.container'));
