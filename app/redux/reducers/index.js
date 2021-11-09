import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import ArticleReducer from './ArticleReducer';
import AuthorReducer from './AuthorReducer';

export default combineReducers({
  articleReducer: ArticleReducer,
  categoryReducer: CategoryReducer,
  authorReducer: AuthorReducer,
});
