import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import PropTypes from 'prop-types';

import './index.css';
import tweetReducers from './reducers/index';
import watchFetchTweetsAsync from './sagas/tweetsSagas';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  tweetReducers,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(watchFetchTweetsAsync);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

Provider.childContextTypes = {
  store: PropTypes.object,
};

registerServiceWorker();
