// client/src/js/apis/fetchData.js

import fetch from 'cross-fetch';

const roomUrl = 'http://localhost:3003/rooms/';

const getRoomInfo = async (roomId, numberReviewsPerPage) => {
  try {
    const url = new URL(roomUrl + roomId);
    const params = { pageonly: 0, start: 0, limit: numberReviewsPerPage };
    url.search = new URLSearchParams(params);
    const response = fetch(url);
    return (await response).json();
  } catch (err) {
    throw (err);
  }
};

const getReviewPage = async (roomId, pageNum, numberReviewsPerPage) => {
  try {
    const url = new URL(roomUrl + roomId);
    const start = (pageNum - 1) * numberReviewsPerPage;
    const params = { pageonly: 1, start, limit: numberReviewsPerPage };
    url.search = new URLSearchParams(params);
    const response = fetch(url);
    return (await response).json();
  } catch (err) {
    throw (err);
  }
};

const queryReviews = async (roomId, keyword, sortBy, numberReviewsPerPage) => {
  try {
    const url = new URL(roomUrl + roomId);
    const params = { pageonly: 1, start: 0, limit: numberReviewsPerPage };
    url.search = new URLSearchParams(params);
    const response = fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword, sortBy }),
    });
    return (await response).json();
  } catch (err) {
    throw (err);
  }
};

export default {
  getRoomInfo,
  getReviewPage,
  queryReviews,
};

