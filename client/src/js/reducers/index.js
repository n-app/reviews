// client/src/js/reducers/index.js

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

const actionHandlers = {
  UPDATE_STATE: (state, action) => ({ ...state, ...action.state }),
  UDPATE_QUERY_INPUT: (state, action) => ({ ...state, queryInput: action.queryInput }),
  UPDATE_QUERY_SORTBY: (state, action) => ({ ...state, querySortBy: action.querySortBy }),
};

const rootReducer = createReducer({}, actionHandlers);

export default rootReducer;
