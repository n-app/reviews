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
};

const rootReducer = createReducer({}, actionHandlers);

export default rootReducer;
