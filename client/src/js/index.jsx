// client/src/js/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Reviews from './components/reviews';
import configureStore from './store/configureStore';

const store = configureStore(); // can also pass in an initialState here

ReactDOM.render(
  (
    <Provider store={store}>
      <Reviews />
    </Provider>
  ),
  document.getElementById('reviews'),
);
