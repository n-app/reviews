// client/src/js/store/index.js

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = {
    ...createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run,
  };
  return store;
}
