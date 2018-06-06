// client/src/js/reducers/index.js

import { combineReducers } from 'redux';
import { queryInput, querySortBy } from './query';
import { status } from './status';
import { roomHasErrored, roomIsFetching, room } from './room';
import { pageHasErrored, pageIsFetching, page } from './pagination';

const rootReducer = combineReducers({
  queryInput,
  querySortBy,
  status,
  room,
  page,
});

export default rootReducer;
