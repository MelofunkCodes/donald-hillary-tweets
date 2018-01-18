import deepFreeze from 'deep-freeze';

import currentUser from '../reducers/currentUser';
import tweets from '../reducers/tweets';


/*
 * Global variables
 */

const initialState = {
  tweets: [],
  loading: false,
};

const tweetsFetched = [
  {
    user: 'HillaryClinton',
    text: 'These words from Dr. King also come to mind today: https://t.co/0qFK3RxBAF',
    id_str: '953005910930153472',
  },
  {
    user: 'HillaryClinton',
    text: 'Beautifully said, @BerniceKing. An important message today and every day. https://t.co/eYJAGc6i2b',
    id_str: '952958227825782784',
  },
  {
    user: 'HillaryClinton',
    text: 'The anniversary of the devastating earthquake 8 years ago is a day to remember the tragedy, honor the resilient people of Haiti, &amp; affirm America’s commitment to helping our neighbors. Instead, we‘re subjected to Trump’s ignorant, racist views of anyone who doesn’t look like him.',
    id_str: '951895239140298752',
  },
];


/*
 * Testing
 */

it('Selects the current twitter user', () => {

  const stateBefore = null;
  const action = {
    type: 'SELECT_USER',
    user: 'HillaryClinton',
  };
  const stateAfter = 'HillaryClinton';

  expect(currentUser(stateBefore, action)).toEqual(stateAfter);
});


it('Changes the state to loading when fetching tweets', () => {
  const stateBefore = initialState;
  const action = {
    type: 'FETCH_TWEETS_LOADING',
  };
  const stateAfter = {
    tweets: [],
    loading: true,
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(tweets(stateBefore, action)).toEqual(stateAfter);
});

it('Populates the tweet array in the state upon a successful fetch', () => {
  const stateBefore = initialState;
  const action = {
    type: 'FETCH_TWEETS_SUCCESS',
    tweets: tweetsFetched,
  };
  const stateAfter = {
    tweets: tweetsFetched,
    loading: false,
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(tweets(stateBefore, action)).toEqual(stateAfter);
});

