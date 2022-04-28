import * as RootNavigation from '../../navigators/RootNavigation';
import {ARTICLES_URL, FEATURED_ARTICLES} from '../../variables';
import axios from '../../axiosConfig';
// import realm from 'models/';
import {data, FEATURED_DESIGNERS} from './data';

// export const navigateTo_salonProfile = salon => {
//     return dispatch => {
//       try {
//         dispatch({
//           type: 'goto_salonprofile',
//         });
//         RootNavigation.navigate('SalonProfile', {salon_id: salon});
//       } catch (error) {}
//     };
//   };

export const getHomeScreenData = () => {
  return async dispatch => {
    dispatch({type: 'home_screen_loading', payload: true});
    try {
      const recentArticlesResult = await axios.get(ARTICLES_URL);
      const featuredArticlesResult = await axios.get(FEATURED_ARTICLES);
      console.log(
        'result of getHomeScreenData',
        recentArticlesResult.data,
        featuredArticlesResult.data,
      );

      dispatch({
        type: 'load_home_screen',
        recentArticles: recentArticlesResult.data,
        featuredArticles: featuredArticlesResult.data,
      });
      dispatch({type: 'home_screen_loading', payload: false});
    } catch (error) {
      console.log('getHomeScreenData', error);
      dispatch({type: 'home_screen_loading', payload: false});
    }
  };
};
