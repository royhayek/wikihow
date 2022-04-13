import * as RootNavigation from '../../navigators/RootNavigation';
import {ARTICLES_URL} from '../../variables';
import axios from '../../axiosConfig';

export const navigateTo_ArticleScreen = () => {
  try {
    RootNavigation.navigate('Article', {});
  } catch (error) {
    console.log(error);
  }
};

export const getArticleDetails = id => {
  return async dispatch => {
    dispatch({type: 'article_details_loading', payload: true});
    try {
      const result = await axios.get(ARTICLES_URL + '/' + id);
      console.log('result of getArticleDetails', result.data);

      dispatch({type: 'article_details_loading', payload: false});
      dispatch({type: 'load_article_details', payload: result.data});
    } catch (error) {
      console.log('getArticleDetails', error);
      dispatch({type: 'article_details_loading', payload: false});
    }
  };
};
