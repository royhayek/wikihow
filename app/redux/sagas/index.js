import {all} from 'redux-saga/effects';
import {
  fetchCategoriesWatcher,
  fetchCategoryArticlesWatcher,
} from './categorySaga';
import {
  fetchTrendingArticlesWatcher,
  fetchArticleDetailsWatcher,
} from './articleSaga';
import {fetchAuthorInfoWatcher} from './authorSaga';

export default function* rootSaga() {
  yield all([
    fetchCategoriesWatcher(),
    fetchCategoryArticlesWatcher(),
    fetchTrendingArticlesWatcher(),
    fetchArticleDetailsWatcher(),
    fetchAuthorInfoWatcher(),
  ]);
}
