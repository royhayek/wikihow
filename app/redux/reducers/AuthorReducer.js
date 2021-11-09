import {types} from '../actions/types';

const INITIAL_STATE = {
  authorInfo: {},
  error: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_AUTHOR_INFO:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_AUTHOR_INFO_SUCCESS:
      return {
        ...state,
        authorInfo: action.payload,
        loading: false,
      };
    case types.FETCH_AUTHOR_INFO_FAILURE:
      return {
        ...state,
        error: {},
        authorInfo: {},
        loading: false,
      };
    default:
      return state;
  }
};
