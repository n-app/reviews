// client/src/js/reducers/index.js

import { combineReducers } from 'redux';
import { roomHasErrored, roomIsFetching, room } from './room';
import { pageHasErrored, pageIsFetching, page } from './pagination';

const rootReducer = combineReducers({
  roomHasErrored,
  roomIsFetching,
  room,
  pageHasErrored,
  pageIsFetching,
  page,
});

export default rootReducer;
