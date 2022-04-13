import * as RootNavigation from '../../navigators/RootNavigation';
import {CATEGORIES_URL} from '../../variables';
import axios from '../../axiosConfig';
// import realm from 'models/';
import {data, FEATURED_DESIGNERS} from './data';

export const navigateTo_ArticlesScreen = ({category}) => {
  return dispatch => {
    try {
      RootNavigation.navigate('Articles', {category: category});
    } catch (error) {}
  };
};

export const getCategories = () => {
  return async dispatch => {
    dispatch({type: 'categories_loading', payload: true});
    try {
      const result = await axios.get(CATEGORIES_URL);
      console.log('result of getCategories', result.data);

      dispatch({type: 'categories_loading', payload: false});
      dispatch({type: 'load_categories', payload: result.data});
    } catch (error) {
      console.log('getCategories', error);
      dispatch({type: 'categories_loading', payload: false});
    }
  };
};
