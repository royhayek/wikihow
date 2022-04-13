import {types} from '../actions/types';

const INITIAL_STATE = {
  trendingArticles: [],
  articleDetails: {},
  articleDetailsLoading: false,
  error: {},
  trendingArticlesLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_TRENDING_ARTICLES:
      return {
        ...state,
        trendingArticlesLoading: true,
      };
    case types.FETCH_TRENDING_ARTICLES_SUCCESS:
      return {
        ...state,
        trendingArticles: action.payload,
        trendingArticlesLoading: false,
      };
    case types.FETCH_TRENDING_ARTICLES_FAIL:
      return {
        ...state,
        error: {},
        trendingArticles: [],
        trendingArticlesLoading: false,
      };
    case types.FETCH_ARTICLE_DETAILS:
      return {
        ...state,
        articleDetailsLoading: true,
      };
    case types.FETCH_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        articleDetails: action.payload,
        articleDetailsLoading: false,
      };
    case types.FETCH_ARTICLE_DETAILS_FAILURE:
      return {
        ...state,
        error: {},
        articleDetails: [],
        articleDetailsLoading: false,
      };
    default:
      return state;
  }
};
