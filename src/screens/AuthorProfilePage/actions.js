import * as RootNavigation from '../../navigators/RootNavigation';
import {AUTHORS_URL} from '../../variables';
import axios from '../../axiosConfig';

export const navigateTo_ArticleScreen = () => {
  try {
    RootNavigation.navigate('Article', {});
  } catch (error) {
    console.log(error);
  }
};

export const getAuthorDetails = id => {
  return async dispatch => {
    dispatch({type: 'author_details_loading', payload: true});
    try {
      const result = await axios.get(AUTHORS_URL + '/' + id);
      console.log('result of getAuthorDetails', result.data);

      dispatch({type: 'author_details_loading', payload: false});
      dispatch({type: 'load_author_details', payload: result.data});
    } catch (error) {
      console.log('getAuthorDetails', error);
      dispatch({type: 'author_details_loading', payload: false});
    }
  };
};
