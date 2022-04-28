const INITIAL_STATE = {
  key: 0,
  data: [],
  loading_screen: false,
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'load_bookmarks':
      return {...state, data: action.payload};

    case 'bookmarks_loading':
      return {...state, loading_screen: action.payload};

    case 'logout_reset_reducers':
      return {...state, data: [], loading_screen: false};

    default:
      return state;
  }
};
