// Imports: Dependencies
import {takeLatest, put, call} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getAuthorInfo} from '../apis/authorApi';

export function* fetchAuthorInfo({payload, error}) {
  try {
    const author = yield call(getAuthorInfo, payload);
    yield put({
      type: types.FETCH_AUTHOR_INFO_SUCCESS,
      payload: author,
    });
  } catch (error) {
    yield put({type: types.FETCH_AUTHOR_INFO_FAILURE, payload: error});
    console.log('FETCH_AUTHOR_INFO API EROR ==>', error);
  }
}

export function* fetchAuthorInfoWatcher() {
  yield takeLatest(types.FETCH_AUTHOR_INFO, fetchAuthorInfo);
}
