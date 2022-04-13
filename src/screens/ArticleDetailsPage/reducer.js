const INITIAL_STATE = {
  key: 0,
  data: [],
  loading_screen: false,
  message: '',
  featuredDesigners: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'load_article_details':
      return {...state, data: action.payload};

    case 'article_details_loading':
      return {...state, loading_screen: action.payload};

    //b7otta bi kel wahde la fadde kell l reducers on logout
    case 'logout_reset_reducers':
      return {...state, data: [], loading_screen: false};

    default:
      return state;
  }
};
