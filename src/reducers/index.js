import {combineReducers} from 'redux';

import mainNavigationReducer from '../navigators/reducer';
import homePageReducer from '../screens/HomePage/reducer';
import categoriesPageReducer from '../screens/CategoriesPage/reducer';
import aboutPageReducer from '../screens/AboutPage/reducer';
import articlesPageReducer from '../screens/ArticlesPage/reducer';
import articleDetailsPageReducer from '../screens/ArticleDetailsPage/reducer';
import authorProfilePageReducer from '../screens/AuthorProfilePage/reducer';
import searchPageReducer from '../screens/SearchPage/reducer';
import bookmarksPageReducer from '../screens/BookmarksPage/reducer';

export default combineReducers({
  mainNavigationRed: mainNavigationReducer,
  homePageRed: homePageReducer,
  categoriesPageRed: categoriesPageReducer,
  aboutPageRed: aboutPageReducer,
  articlesPageRed: articlesPageReducer,
  articleDetailsPageRed: articleDetailsPageReducer,
  authorProfilePageRed: authorProfilePageReducer,
  searchPageRed: searchPageReducer,
  bookmarksPageRed: bookmarksPageReducer,
});
