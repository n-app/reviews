// client/src/js/reducers/room.js

import { ROOM_HAS_ERRORED, ROOM_IS_FETCHING } from '../constants/actionTypes';

export default {
  roomHasErrored: (state = false, action) => {
    switch (action.type) {
      case ROOM_HAS_ERRORED: {
        return action.roomHasErrored;
      }
      default: {
        return state;
      }
    }
  },

  roomIsFetching: (state = false, action) => {
    switch (action.type) {
      case ROOM_IS_FETCHING: {
        return action.roomIsFetching;
      }
      default: {
        return state;
      }
    }
  },

  room: (state = {}, action) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  },
};
