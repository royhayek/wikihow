const INITIAL_STATE = {
  key: 0,
  data: [],
  loading_screen: false,
  message: '',
  featuredDesigners: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'load_searched_articles':
      return {...state, data: action.payload};

    case 'search_articles_loading':
      return {...state, loading_screen: action.payload};

    //b7otta bi kel wahde la fadde kell l reducers on logout
    case 'logout_reset_reducers':
      return {...state, data: [], loading_screen: false};

    default:
      return state;
  }
};
