import { FETCH_TWEETS_SUCCESS } from '../actions/index';

const initialState = {
  tweets: [],
  loading: false,
};

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        tweets: action.tweets,
        username: action.username,
        loading: false,
      };
    default:
      return state;
  }
};

export default tweets;
