import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';
import App from './components/App';
import ButtonChoices from './components/ButtonChoices';
import User from './components/User';
import registerServiceWorker from './registerServiceWorker';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ButtonChoices} />
      <Route path="tweets/:username" component={User} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
