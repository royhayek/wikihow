import defaultAxios from 'axios';
import {API_TOKEN, BASE_URL} from '../../api/ApiList';

const axios = defaultAxios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: API_TOKEN,
  },
});

export default axios;
