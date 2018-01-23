import { combineReducers } from 'redux';

import currentUser from './currentUser';
import tweets from './tweets';

const tweetReducers = combineReducers({
  currentUser,
  tweets,
});

export default tweetReducers;
