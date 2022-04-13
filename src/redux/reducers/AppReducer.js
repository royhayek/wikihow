import { types } from '../actions/types';

const INITIAL_STATE = {
  about: "",
  aboutLoading: false,
  error: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ABOUT:
      return {
        ...state,
        aboutLoading: true,
      };
    case types.FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        about: action.payload,
        aboutLoading: false,
      };
    case types.FETCH_ABOUT_FAILURE:
      return {
        ...state,
        error: {},
        about: [],
        aboutLoading: false,
      };
    default:
      return state;
  }
};
