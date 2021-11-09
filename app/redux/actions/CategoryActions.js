import {types} from './types';
export const fetchCategories = () => {
  return {
    type: types.FETCH_CATEGORIES,
  };
};

export const fetchCategoryArticles = data => {
  return {
    type: types.FETCH_CATEGORY_ARTICLES,
    payload: data,
  };
};
