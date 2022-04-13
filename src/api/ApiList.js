export const DOMAIN = 'http://192.168.1.106:8000/';
export const BASE_URL = `${DOMAIN}api/`;

export const API_TOKEN = '***REMOVED***';

export const API_STATUS_OK = 200;
export const API_STATUS_NOT_OK = 400;

export const APIS = {
  GET_CATEGORIES: `${BASE_URL}categories`,
  GET_ARTICLES: `${BASE_URL}articles`,
  GET_AUTHORS: `${BASE_URL}authors`,
  GET_ABOUT: `${BASE_URL}settings`,
};
