// client/src/js/reducers/query.js

import {
  UPDATE_QUERY_INPUT,
  UPDATE_QUERY_SORTBY,
} from '../constants/actionTypes';


export default {
  queryInput: (state = '', action) => {
    switch (action.type) {
      case UPDATE_QUERY_INPUT: {
        return action.queryInput;
      }
      default: {
        return state;
      }
    }
  },

  querySortBy: (state = null, action) => {
    switch (action.type) {
      case UPDATE_QUERY_SORTBY: {
        return action.querySortBy;
      }
      default: {
        return state;
      }
    }
  },
};
