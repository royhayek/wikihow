const INITIAL_STATE = {
  searchBarShown: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'toggle_search_bar':
      return {...state, searchBarShown: !state.searchBarShown};
    default:
      return state;
  }
};
