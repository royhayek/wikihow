import * as RootNavigation from '../../navigators/RootNavigation';
import {ARTICLES_URL, RANDOM_ARTICLE_URL, UPDATE_ARTICLE_VIEWS_URL} from '../../variables';
import axios from '../../axiosConfig';

export const navigateTo_ArticleScreen = () => {
  try {
    RootNavigation.navigate('Article', {});
  } catch (error) {
    console.log(error);
  }
};

export const updateArticleViews = id => {
  return async dispatch => {
    try {
      const result = await axios.put(UPDATE_ARTICLE_VIEWS_URL + '/' + id);
      console.log('result of updateArticleViews', result.data);
    } catch (error) {
      console.log('getArticleDetails', error);
    }
  };
};

export const getArticleDetails = id => {
  console.log('we are inside getarticledetails');

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

export const getRandomArticle = () => {
  return async dispatch => {
    dispatch({type: 'article_details_loading', payload: true});
    try {
      const result = await axios.get(RANDOM_ARTICLE_URL);
      console.log('result of getRandomArticle', result.data);

      dispatch({type: 'article_details_loading', payload: false});
      dispatch({type: 'load_article_details', payload: result.data});
    } catch (error) {
      console.log('getRandomArticle', error);
      dispatch({type: 'article_details_loading', payload: false});
    }
  };
};
