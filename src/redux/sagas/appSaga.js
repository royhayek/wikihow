import { takeLatest, put, call } from 'redux-saga/effects';
import { types } from '../actions/types';
import { getAbout } from '../apis/appApi';

export function* fetchAbout() {
  try {
    const about = yield call(getAbout);
    yield put({
      type: types.FETCH_ABOUT_SUCCESS,
      payload: about,
    });
  } catch (error) {
    yield put({ type: types.FETCH_ABOUT_FAILURE, payload: error });
    console.log('FETCH_ABOUT_FAILURE API EROR ==>', error);
  }
}
export function* fetchAboutWatcher() {
  yield takeLatest(types.FETCH_ABOUT, fetchAbout);
}
