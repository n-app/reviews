// client/src/js/reducers/pagination.js

import {
  PAGE_HAS_ERRORED,
  PAGE_IS_FETCHING,
  UPDATE_PAGE_INFO,
} from '../constants/actionTypes';


export default {
  pageHasErrored: (state = false, action) => {
    switch (action.type) {
      case PAGE_HAS_ERRORED: {
        return action.pageHasErrored;
      }
      default: {
        return state;
      }
    }
  },

  pageIsFetching: (state = false, action) => {
    switch (action.type) {
      case PAGE_IS_FETCHING: {
        return action.pageIsFetching;
      }
      default: {
        return state;
      }
    }
  },

  page: (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PAGE_INFO: {
        return { ...state, ...action.page };
      }
      default: {
        return state;
      }
    }
  },
};
