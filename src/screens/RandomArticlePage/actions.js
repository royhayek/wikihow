import * as RootNavigation from '../../navigators/RootNavigation';
import {RANDOM_ARTICLE_URL} from '../../variables';
import axios from '../../axiosConfig';

export const navigateTo_ArticleScreen = () => {
  try {
    RootNavigation.navigate('Article', {});
  } catch (error) {
    console.log(error);
  }
};

export const getRandomArticle = () => {
  return async dispatch => {
    dispatch({type: 'random_article_loading', payload: true});
    try {
      const result = await axios.get(RANDOM_ARTICLE_URL);
      console.log('result of getRandomArticle', result.data);

      dispatch({type: 'random_article_loading', payload: false});
      dispatch({type: 'load_random_article', payload: result.data});
    } catch (error) {
      console.log('getRandomArticle', error);
      dispatch({type: 'random_article_loading', payload: false});
    }
  };
};
