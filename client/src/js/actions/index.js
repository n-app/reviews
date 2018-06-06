// client/src/js/actions/index.js

import {
  ROOM_HAS_ERRORED,
  PAGE_HAS_ERRORED,
  ROOM_IS_FETCHING,
  PAGE_IS_FETCHING,
  UPDATE_ROOM_INFO,
  UPDATE_PAGE_INFO,
} from '../constants/actionTypes';


export default {
  roomHasErrored: bool => ({ type: ROOM_HAS_ERRORED, roomHasErrored: bool }),
  pageHasErrored: bool => ({ type: PAGE_HAS_ERRORED, pageHasErrored: bool }),
  roomIsFetching: bool => ({ type: ROOM_IS_FETCHING, roomIsFetching: bool }),
  pageIsFetching: bool => ({ type: PAGE_IS_FETCHING, pageIsFetching: bool }),
  updateRoomInfo: room => ({ type: UPDATE_ROOM_INFO, room }),
  updatePageInfo: page => ({ type: UPDATE_PAGE_INFO, page }),
};
