import axios from 'axios';
import {ACCESS_TOKEN} from './variables';
// import realm from './models/';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // var token = '';
    // try {
    //   // var user = realm.objects('UserModel')[0];
    //   if (user) {
    //     // token = user.token;
    config.headers.authorization = ACCESS_TOKEN;
    //     //used in different languages
    //     // config.headers['x-local'] = user.language;
    //   }
    // } catch (e) {
    //   console.log('could not get the user from realm');
    // }

    // Do something before request is sent

    console.log('axios before sending', config);
    return config;
  },
  function (error) {
    console.log('axios before sending error', error);
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    console.log('axios after response', response);

    return {...response};
  },
  function (error) {
    console.log('axios after response error', error);
    return Promise.reject(error);
  },
);

export default axios;
