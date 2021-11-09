// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from '../redux/reducers';
// Imports: Redux Root Saga
import rootSaga from '../redux/sagas';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {store};
