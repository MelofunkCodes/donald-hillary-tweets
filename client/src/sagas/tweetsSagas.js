import { call, put, takeEvery } from 'redux-saga/effects';

import fetchTweets from './api';
import { FETCH_TWEETS, fetchTweetsSuccess } from '../actions/index';


// worker Saga
function* fetchTweetsAsync(action) {
  try {
    const tweets = yield call(fetchTweets, action.username);
    yield put(fetchTweetsSuccess(tweets));
  } catch (error) {
    console.log('Failed to fetch tweets!');
    console.log(error);
  }
}

// watcher Saga
export default function* watchFetchTweetsAsync() {
  yield takeEvery(FETCH_TWEETS, fetchTweetsAsync);
}
