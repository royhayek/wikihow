const INITIAL_STATE = {
  searchBarShown: false,
  searchKeyword: '',
  language: 'en'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'show_search_bar':
      return { ...state, searchBarShown: true };

    case 'hide_search_bar':
      return { ...state, searchBarShown: false };

    case 'set_search_keyword':
      return { ...state, searchKeyword: action.payload };

    case 'set_current_language':
      return { ...state, language: action.payload };

    default:
      return state;
  }
};
