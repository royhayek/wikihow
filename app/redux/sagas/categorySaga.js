// Imports: Dependencies
import {takeLatest, put, call} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getAllCategories, getCategoryArticles} from '../apis/categoryApi';

export function* fetchCategories() {
  try {
    const categories = yield call(getAllCategories);
    yield put({
      type: types.FETCH_CATEGORIES_SUCCESS,
      payload: categories,
    });
  } catch (error) {
    yield put({type: types.FETCH_CATEGORIES_FAIL, payload: error});
    console.log('FETCH_CATEGORIES API EROR ==>', error);
  }
}

export function* fetchCategoriesWatcher() {
  yield takeLatest(types.FETCH_CATEGORIES, fetchCategories);
}

export function* fetchCategoryArticles({payload, error}) {
  try {
    const articles = yield call(getCategoryArticles, payload);
    yield put({
      type: types.FETCH_CATEGORY_ARTICLES_SUCCESS,
      payload: articles,
    });
  } catch (err) {
    yield put({type: types.FETCH_CATEGORY_ARTICLES_FAIL, payload: error});
    console.log('FETCH_CATEGORY_ARTICLES API EROR ==>', err);
  }
}

export function* fetchCategoryArticlesWatcher() {
  yield takeLatest(types.FETCH_CATEGORY_ARTICLES, fetchCategoryArticles);
}
