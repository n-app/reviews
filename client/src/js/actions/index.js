// client/src/js/actions/index.js

import {
  ROOM_HAS_ERRORED,
  PAGE_HAS_ERRORED,
  ROOM_IS_FETCHING,
  PAGE_IS_FETCHING,
} from '../constants/actionTypes';


export default {
  roomHasErrored: bool => ({ type: ROOM_HAS_ERRORED, roomHasErrored: bool }),
  pageHasErrored: bool => ({ type: PAGE_HAS_ERRORED, pageHasErrored: bool }),
  roomIsFetching: bool => ({ type: ROOM_IS_FETCHING, roomIsFetching: bool }),
  pageIsFetching: bool => ({ type: PAGE_IS_FETCHING, pageIsFetching: bool }),

};
