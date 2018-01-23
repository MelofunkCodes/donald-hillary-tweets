export const FETCH_TWEETS = 'FETCH_TWEETS';
export const FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS';

export const fetchTweets = username => ({ type: FETCH_TWEETS, username });
export const fetchTweetsSuccess = (tweets) => (
  {
    type: FETCH_TWEETS_SUCCESS,
    tweets,
  }
);
