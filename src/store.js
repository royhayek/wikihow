import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import AppReducer from './reducers/index';

export default createStore(AppReducer, applyMiddleware(thunk));
