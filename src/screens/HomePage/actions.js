import * as RootNavigation from '../../navigators/RootNavigation';
import {ARTICLES_URL} from '../../variables';
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
      const result = await axios.get(ARTICLES_URL);
      console.log('result of getHomeScreenData', result.data);

      dispatch({type: 'home_screen_loading', payload: false});
      dispatch({type: 'load_home_screen', payload: result.data});
    } catch (error) {
      console.log('getHomeScreenData', error);
      dispatch({type: 'home_screen_loading', payload: false});
    }
  };
};
