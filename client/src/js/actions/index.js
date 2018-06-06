// client/src/js/actions/index.js

import {
  UPDATE_QUERY_INPUT,
  UPDATE_QUERY_SORTBY,
  UDPATE_STATUS,
  UPDATE_ROOM_INFO,
  UPDATE_PAGE_INFO,
} from '../constants/actionTypes';


export default {
  updateQueryInput: queryInput => ({ type: UPDATE_QUERY_INPUT, queryInput }),
  updateQuerySortBy: querySortBy => ({ type: UPDATE_QUERY_SORTBY, querySortBy }),
  updateStatus: status => ({ type: UPDATE_STATUS, status }),
  updateRoomInfo: room => ({ type: UPDATE_ROOM_INFO, room }),
  updatePageInfo: page => ({ type: UPDATE_PAGE_INFO, page }),
};
