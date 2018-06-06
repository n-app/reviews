// client/src/js/reducers/pagination.js

import {
  PAGE_HAS_ERRORED,
  PAGE_IS_FETCHING,
} from '../constants/actionTypes';

const numberReviewsPerPage = 7;

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

  page: (state = { numberReviewsPerPage }, action) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  },
};
