import { combineReducers } from 'redux';

import currentUser from './currentUser';
import tweets from './tweets';

const tweetApp = combineReducers({
  currentUser,
  tweets,
});

export default tweetApp;
