import { combineReducers } from 'redux';

import tweets from './tweets';

const tweetReducers = combineReducers({
  tweets,
});

export default tweetReducers;
