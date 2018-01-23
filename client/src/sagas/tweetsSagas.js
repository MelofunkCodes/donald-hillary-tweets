import { call, put, takeEvery } from 'redux-saga/effects';

import fetchTweets from './api';
import { FETCH_TWEETS, fetchTweetsSuccess } from '../actions/index';


// worker Saga
function* fetchTweetsAsync(action) {
  try {
    console.log(`Calling fetchTweetsAsync worker Saga:
    action: ${JSON.stringify(action, false, 2)}`);
    const tweets = yield call(fetchTweets, action.username);
    console.log(`tweets fetched from api in worker saga: ${JSON.stringify(tweets, false, 2)}`);

    yield put(fetchTweetsSuccess(action.username, tweets));
    console.log('Success!!');
  } catch (error) {
    console.log('Failed to fetch tweets!');
    console.log(error);
  }
}

// watcher Saga
export default function* watchFetchTweetsAsync() {
  yield takeEvery(FETCH_TWEETS, fetchTweetsAsync);
}
