import {types} from './types';

export const fetchAuthorInfo = data => {
  return {
    type: types.FETCH_AUTHOR_INFO,
    payload: data,
  };
};

