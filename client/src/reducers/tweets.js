const initialState = {
  tweets: [],
  loading: false,
};

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TWEETS_LOADING':
      return {
        ...state,
        tweets: [],
        loading: true,
      };
    case 'FETCH_TWEETS_SUCCESS':
      return {
        ...state,
        tweets: action.tweets,
        loading: false,
      };
    default:
      return state;
  }
};

export default tweets;
