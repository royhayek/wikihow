import {types} from './types';

export const fetchTrendingArticles = () => {
  return {
    type: types.FETCH_TRENDING_ARTICLES,
  };
};

export const fetchArticleDetails = data => {
  return {
    type: types.FETCH_ARTICLE_DETAILS,
    payload: data,
  };
};
