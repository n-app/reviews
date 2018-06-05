// client/src/js/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Reviews from './components/reviews';
import store from './store/index';

ReactDOM.render(
  (
    <Provider store={store}>
      <Reviews />
    </Provider>
  ),
  document.getElementById('reviews'),
);
