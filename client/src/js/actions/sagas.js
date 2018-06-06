// client/src/js/actions/sagas.js

import { call, put, take, takeLatest } from 'redux-saga/effects';
import {
  roomHasErrored,
  pageHasErrored,
  roomIsFetching,
  pageIsFetching,
  updateRoomInfo,
  updatePageInfo,
} from './index';
import fetchData from '../apis/fetchData';

function *getRoomInfo (roomId, NumberReviewsPerPage) {
  try {

  } catch (err) {
    yield call('ROOM_ERROR', )
  }
}