const INITIAL_STATE = {
  searchBarShown: false,
  searchKeyword: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'show_search_bar':
      return {...state, searchBarShown: true};

    case 'hide_search_bar':
      return {...state, searchBarShown: false};

    case 'set_search_keyword':
      return {...state, searchKeyword: action.payload};

    default:
      return state;
  }
};
