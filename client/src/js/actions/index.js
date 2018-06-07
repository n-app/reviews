// client/src/js/actions/index.js

import {
  UPDATE_STATE,
  SELECT_A_ROOM,
  SELECT_A_PAGE,
  UPDATE_QUERY_INPUT,
  UDPATE_QUERY_SORTBY,
} from '../constants/actionTypes';


export default {
  updateState: state => ({ type: UPDATE_STATE, state }),
  selectARoom: state => ({ type: SELECT_A_ROOM, state }),
  selectAPage: state => ({ type: SELECT_A_PAGE, state }),
  updateQueryInput: queryInput => ({ type: UPDATE_QUERY_INPUT, queryInput }),
  updateQuerySortBy: querySortBy => ({ type: UDPATE_QUERY_SORTBY, querySortBy }),
};
