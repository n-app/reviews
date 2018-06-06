// client/src/js/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Reviews from './components/reviews';
import configureStore from './store/configureStore';

const initialState = {
  queryInput: '',
  querySortBy: null,
  status: {
    roomHasErrored: false,
    roomIsFetching: false,
    pageHasErrored: false,
    pageIsFetching: false,
  },
  room: {
    roomId: 0,

  },
  page: {
    numberReviewsPerPage: 7,
    currentPage: 0,

  },
};

const store = configureStore(initialState); // can also pass in an initialState here

ReactDOM.render(
  (
    <Provider store={store}>
      <Reviews />
    </Provider>
  ),
  document.getElementById('reviews'),
);
