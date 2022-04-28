import {BOOKMARKS_URL} from '../../variables';
import axios from '../../axiosConfig';
import realm from '../../models';

export const getBookmarkedArticles = () => {
  return async dispatch => {
    dispatch({type: 'bookmarks_loading', payload: true});
    try {
      const articleIds = realm.objects('ArticleModel').map(article => article.id);
      const result = await axios.get(BOOKMARKS_URL, {
        params: {
          articleIds: articleIds,
        },
      });
      console.log('result of getBookmarkedArticles', result.data);

      dispatch({type: 'bookmarks_loading', payload: false});
      dispatch({type: 'load_bookmarks', payload: result.data});
    } catch (error) {
      console.log('getBookmarkedArticles', error);
      dispatch({type: 'bookmarks_loading', payload: false});
    }
  };
};
