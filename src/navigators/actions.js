export const toggleSearchBar = payload => {
  return dispatch => {
    dispatch({
      type: 'toggle_search_bar',
    });
  };
};
