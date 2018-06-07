// client/src/js/actions/sagas.js

import { call, put, fork, cancel, takeLatest } from 'redux-saga/effects';
import { updateState } from './index';
import fetchData from '../apis/fetchData';

function* pageIsFetching(state) {
  const newState = {
    ...state,
    pageIsFetching: true,
    pageHasErroed: false,
  };
  yield put(updateState(newState));
}

function* roomIsFetching(state) {
  const newState = {
    ...state,
    roomIsFetching: true,
    roomHasErroed: false,
  };
  yield put(updateState(newState));
}

function* pageHasErrored(state) {
  const newState = {
    ...state,
    pageIsFetching: false,
    pageHasErroed: true,
  };
  yield put(updateState(newState));
}

function* roomHasErrored(state) {
  const newState = {
    ...state,
    roomIsFetching: false,
    roomHasErroed: true,
  };
  yield put(updateState(newState));
}


function* roomInfoFetched(state) {
  const newState = {
    ...state,
    roomIsFetching: false,
  };
  yield put(updateState(newState));
}

function* pageInfoFetched(state) {
  const newState = {
    ...state,
    pageIsFetching: false,
  };
  yield put(updateState(newState));
}

function* getReviewPage(state) {
  try {
    const task = yield fork(pageIsFetching);
    const data = yield call(
      fetchData.getReviewPage,
      state.roomId,
      state.currentPage,
      state.numberReviewsPerPage,
    );
    yield cancel(task);
    const newState = {
      ...state,
      ...data,
    };
    yield call(pageInfoFetched, newState);
  } catch (err) {
    throw (err);
  }
}

function* getRoomInfo(state) {
  try {
    const task = yield fork(roomIsFetching);
    const data = yield call(
      fetchData.getRoomInfo,
      state.roomId,
      state.currentPage,
      state.numberReviewsPerPage,
    );
    yield cancel(task);
    const newState = {
      ...state,
      roomId: data.roomInfo.id,
      roomName: data.roomInfo.roomName,
      roomTotalReviewNumber: data.roomInfo.totalNumberReviews,
      overAllRating: {
        accuracy: data.roomInfo.accuracy,
        communication: data.roomInfo.communication,
        cleanliness: data.roomInfo.cleanliness,
        location: data.roomInfo.location,
        checkIn: data.roomInfo.checkIn,
        value: data.roomInfo.value,
      },
    };
    yield call(roomInfoFetched, newState);
  } catch (err) {
    throw (err);
  }
}

function* selectAPage(action) {
  const state = { ...action.state };
  try {
    yield call(getReviewPage, state);
  } catch (err) {
    yield call(pageHasErrored(state));
  }
}

function* selectARoom(action) {
  const state = {
    ...action.state,
    currentPage: 1,
    queryInput: '',
    querySortBy: null,
  };
  try {
    yield call(getRoomInfo, state);
  } catch (err) {
    yield call(roomHasErrored(state));
  }
}

function* mySelectAPage() {
  yield takeLatest('SELECT_A_PAGE', selectAPage);
}

function* mySelectARoom() {
  yield takeLatest('SELECT_A_ROOM', selectARoom);
}

export default {
  mySelectAPage,
  mySelectARoom,
};


//test:
const iterator = selectAPage({ type: 'SELECT_A_PAGE', state: {
  currentPage: 2,
  roomId: 1002,
  numberReviewsPerPage: 7,
} })

console.log(iterator.next().value);