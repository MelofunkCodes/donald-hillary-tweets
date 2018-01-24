import { put, call } from 'redux-saga/effects';

import { fetchTweetsAsync } from '../sagas/tweetsSagas';
import fetchTweets from '../sagas/api';
import { fetchTweetsSuccess } from '../actions/index';

//todo: Get test to work on jest! currently not recognizing my generator function fetchTweetsAsync!
it('Tests fetchTweetsAsync worker Saga', (assert) => {
  const action = { username: 'HillaryClinton' };
  // console.log('hello! asldjfa;lsdjkfa;lsdkfj');
  // console.log(`fetchTweetsAsync: ${fetchTweetsAsync}`); // undefined
  
  const gen = fetchTweetsAsync(action);

  const mockTweets = [
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

  assert.deepEqual(
    gen.next().value,
    call(fetchTweets, action.username),
    'fetchTweetsAsync Saga must call and await from tweets from the Twitter API',
  );

  assert.deepEqual(
    gen.next().value,
    put(fetchTweetsSuccess(mockTweets)),
    'fetchTweetsAsync Saga must dispatch a FETCH_TWEETS_SUCCESS action',
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'fetchTweetsAsync Saga must be done',
  );

  assert.end();

});
