import {takeLatest, put, call} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getAllTrendingArticles, getArticleDetails} from '../apis/articleApi';

export function* fetchTrendingArticles() {
  try {
    const articles = yield call(getAllTrendingArticles);
    yield put({
      type: types.FETCH_TRENDING_ARTICLES_SUCCESS,
      payload: articles,
    });
  } catch (error) {
    yield put({type: types.FETCH_TRENDING_ARTICLES_FAIL, payload: error});
    console.log('FETCH_TRENDING_ARTICLES API EROR ==>', error);
  }
}
export function* fetchTrendingArticlesWatcher() {
  yield takeLatest(types.FETCH_TRENDING_ARTICLES, fetchTrendingArticles);
}

export function* fetchArticleDetails({payload, error}) {
  try {
    const details = yield call(getArticleDetails, payload);
    yield put({
      type: types.FETCH_ARTICLE_DETAILS_SUCCESS,
      payload: details,
    });
  } catch (err) {
    yield put({type: types.FETCH_ARTICLE_DETAILS_FAILURE, payload: error});
    console.log('FETCH_ARTICLE_DETAILS API EROR ==>', err);
  }
}
export function* fetchArticleDetailsWatcher() {
  yield takeLatest(types.FETCH_ARTICLE_DETAILS, fetchArticleDetails);
}
