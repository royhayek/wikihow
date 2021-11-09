import {types} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  articles: [],
  error: {},
  categoriesLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categoriesLoading: true,
      };
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        categoriesLoading: false,
      };
    case types.FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        categoriesLoading: false,
      };
    case types.FETCH_CATEGORY_ARTICLES:
      return {
        ...state,
        articlesLoading: true,
      };
    case types.FETCH_CATEGORY_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        articlesLoading: false,
      };
    case types.FETCH_CATEGORY_ARTICLES_FAIL:
      return {
        ...state,
        error: {},
        articles: [],
        articlesLoading: false,
      };
    default:
      return state;
  }
};
