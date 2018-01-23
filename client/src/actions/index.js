export const SELECT_USER = 'SELECT_USER';
export const FETCH_TWEETS = 'FETCH_TWEETS';
export const FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS';

export const selectUser = username => ({ type: SELECT_USER, username });

export const fetchTweets = username => ({ type: FETCH_TWEETS, username });
export const fetchTweetsSuccess = (username, tweets) => (
  {
    type: FETCH_TWEETS_SUCCESS,
    username,
    tweets,
  }
);
