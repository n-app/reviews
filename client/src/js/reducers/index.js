// client/src/js/reducers/index.js

import { A, B } from '../constants/actionTypes';

const initialState = {
  roomId: 0,
  roomTotalReviews: 0,
  queryTotalReviews: 0,
  overAllRating: {
    accuracy: 0,
    communication: 0,
    cleanliness: 0,
    location: 0,
    checkIn: 0,
    value: 0,
  },
  reviews: [],
  pages: {},
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case A: {
      return state;
    }

    case B: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
