export const hideSearchBar = () => {
  return dispatch => {
    dispatch({
      type: 'hide_search_bar',
    });
  };
};

export const setSearchKeyword = keyword => {
  return dispatch => {
    dispatch({
      type: 'set_search_keyword',
      payload: keyword,
    });
  };
};

export const showSearchBar = () => {
  return dispatch => {
    dispatch({
      type: 'show_search_bar',
    });
  };
};
