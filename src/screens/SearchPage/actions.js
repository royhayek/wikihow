import * as RootNavigation from '../../navigators/RootNavigation';
// import {USER_VALIDATE_URL} from '../../variables';
import axios from 'axios';
import {SEARCH_ARTICLE_URL} from '../../variables';
// import realm from 'models/';

export const getSearchResult = searchKeyword => {
  console.log('actions called');
  return async dispatch => {
    dispatch({type: 'search_articles_loading', payload: true});
    try {
      console.log('searchKeyword', searchKeyword);
      const result = await axios.get(SEARCH_ARTICLE_URL + `?keyword=${searchKeyword}`);
      console.log('result of getSearchResult', result.data);
      dispatch({type: 'search_articles_loading', payload: false});
      dispatch({type: 'load_searched_articles', payload: result.data});
    } catch (error) {
      console.log('getSearchResult', error);
      dispatch({type: 'search_articles_loading', payload: false});
    }
    // }
  };
};

// export const navigateTo_CollectionPreview = () => {
//   return dispatch => {
//     try {
//       // dispatch({
//       //   type: 'goto_CollectionPreview',
//       // });
//       RootNavigation.navigate('CollectionPreview', {});
//     } catch (error) {}
//   };
// };
