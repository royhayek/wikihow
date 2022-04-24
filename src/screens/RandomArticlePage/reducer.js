const INITIAL_STATE = {
  key: 0,
  data: {},
  loading_screen: false,
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'load_random_article':
      return {...state, data: action.payload};

    case 'random_article_loading':
      return {...state, loading_screen: action.payload};

    //b7otta bi kel wahde la fadde kell l reducers on logout
    case 'logout_reset_reducers':
      return {...state, data: [], loading_screen: false};

    default:
      return state;
  }
};
