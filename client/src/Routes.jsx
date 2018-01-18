import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import ButtonChoices from './components/ButtonChoices';
import User from './components/User';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ButtonChoices} />
      <Route path="tweets/:username" component={User} />
    </Route>
  </Router>
);

export default Routes;
