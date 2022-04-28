const INITIAL_STATE = {
  key: 0,
  recentArticles: [],
  loading_screen: false,
  message: '',
  featuredArticles: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'load_home_screen':
      return {
        ...state,
        recentArticles: action.recentArticles,
        featuredArticles: action.featuredArticles,
      };

    case 'home_screen_loading':
      return {...state, loading_screen: action.payload};

    case 'logout_reset_reducers':
      return {...state, data: [], loading_screen: false};

    default:
      return state;
  }
};
