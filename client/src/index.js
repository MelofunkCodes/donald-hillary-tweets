import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';

import './index.css';
import tweetApp from './reducers/index';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(tweetApp);

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
