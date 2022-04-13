import * as RootNavigation from '../../navigators/RootNavigation';
// import {USER_VALIDATE_URL} from '../../variables';
import axios from 'axios';
import {SETTINGS_URL} from '../../variables';
// import realm from 'models/';

export const getAboutScreenData = () => {
  console.log('actions called');
  return async dispatch => {
    dispatch({type: 'about_screen_loading', payload: true});
    try {
      const result = await axios.get(SETTINGS_URL);
      console.log('result of getAboutScreenData', result.data);
      dispatch({type: 'about_screen_loading', payload: false});
      dispatch({type: 'load_about_screen', payload: result.data});
    } catch (error) {
      console.log('getAboutScreenData', error);
      dispatch({type: 'about_screen_loading', payload: false});
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
