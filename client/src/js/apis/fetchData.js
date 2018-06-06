// client/src/js/apis/fetchData.js

const roomUrl = 'http://localhost:3003/rooms/';

const getRoomInfo = async (roomId, NumberReviewsPerPage) => {
  try {
    const url = new URL(roomUrl + roomId);
    const params = { pageonly: 0, start: 0, limit: NumberReviewsPerPage };
    url.search = new URLSearchParams(params);
    const response = fetch(url);
    return (await response).json();
  } catch (err) {
    throw (err);
  }
};

const getReviewPage = async (roomId, pageNum, NumberReviewsPerPage) => {
  try {
    const url = new URL(roomUrl + roomId);
    const start = (pageNum - 1) * NumberReviewsPerPage;
    const params = { pageonly: 1, start, limit: NumberReviewsPerPage };
    url.search = new URLSearchParams(params);
    const response = fetch(url);
    return (await response).json();
  } catch (err) {
    throw (err);
  }
};

const queryReviews = async (roomId, keyword, sortBy, NumberReviewsPerPage) => {
  try {
    const url = new URL(roomUrl + roomId);
    const params = { pageonly: 1, start: 0, limit: NumberReviewsPerPage };
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
