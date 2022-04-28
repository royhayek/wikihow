import {CATEGORIES_URL} from '../../variables';
import axios from '../../axiosConfig';

export const getCategoryArticles = id => {
  return async dispatch => {
    dispatch({type: 'load_articles', payload: []});
    dispatch({type: 'articles_loading', payload: true});
    try {
      const result = await axios.get(`${CATEGORIES_URL}/${id}`);
      console.log('result of getCategoryArticles', result.data);

      dispatch({type: 'articles_loading', payload: false});
      dispatch({type: 'load_articles', payload: result.data});
    } catch (error) {
      console.log('getCategoryArticles error', error);
      dispatch({type: 'articles_loading', payload: false});
    }
  };
};
