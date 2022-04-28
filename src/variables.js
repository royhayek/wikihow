export const APP_VERSION = '1.0';
export const PROTOCOL = 'https://';

// //--apis used at work ------------------------------//
// // export const URI = PROTOCOL + '192.168.1.211:8081';
// // export const API = URI + '/v1';

// //--api used at home--------------------------------------//
export const URI = PROTOCOL + 'wikihowclone.royhayek.com';
export const API = URI + '/api/';

export const ACCESS_TOKEN = '***REMOVED***';

// //home
export const ARTICLES_URL = API + 'articles';
export const FEATURED_ARTICLES = API + 'featured-articles';
export const RANDOM_ARTICLE_URL = API + 'random-article';
export const SEARCH_ARTICLE_URL = API + 'search-article';
export const UPDATE_ARTICLE_VIEWS_URL = API + 'update-views';
export const BOOKMARKS_URL = API + 'bookmarks';
export const CATEGORIES_URL = API + 'categories';
export const SETTINGS_URL = API + 'app-settings';
export const AUTHORS_URL = API + 'authors';

// //--------------------------------------------------------------------------//
// //---------------For orders list-------------------------------------------//
// //---------------User app--------------------------------------------------//
// //http://api.nutriciahomecareme.com/users/1/orders
// export const FETCH_MY_ORDERS_URL = (ID) => {
//   return API + '/users/' + ID + '/orders';
// };

// //-------------------------------------------------------//
// //---------------For order detail list-------------------//
// //---------------User app--------------------------------//
// //http://api.nutriciahomecareme.com/users/1/orders/1
// export const FETCH_ORDER_DETAIL_URL = (ID, ORDER_ID) => {
//   return API + '/users/' + ID + '/orders/' + ORDER_ID;
// };

// };
// //--------------------------------------------------------------------//
// //---------------Get Submit Bad Reasons------------------------------//
// //------------------User App------------------------------------------//
// //http://api.nutriciahomecareme.com/users/1/orders/1/review
// export const SUBMIT_REVIEW = (USERID, ORDERID) => {
//   return API + '/users/' + USERID + '/orders/' + ORDERID + '/review';
// };
