const INITIAL_STATE = {
  key: 0,
  data: [],
  loading_screen: false,
  message: '',
  featuredDesigners: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'load_about_screen':
      return {...state, data: action.payload};

    case 'about_screen_loading':
      return {...state, loading_screen: action.payload};

    
    case 'logout_reset_reducers':
      return {...state, data: [], loading_screen: false};

    default:
      return state;
  }
};
