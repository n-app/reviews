const express = require('express');
const tempStorage = require('./tempStorage');
const db = require('../database/index');

const router = express.Router();

const getQueryParams = ({ pageonly, start, limit }) => {
  const result = {};
  result.totalNumberResults = tempStorage.totalNumberResults;
  if (!parseInt(pageonly, 10)) {
    result.roomInfo = tempStorage.roomInfo;
  }
  const index = parseInt(start, 10);
  const end = parseInt(limit, 10) + index;
  result.reviews = tempStorage.allQueryReviews.slice(index, end);
  return result;
};

// handle GET requests for /rooms
router.get('/:roomId', async (req, res, next) => {
  try {
    let { roomId } = req.params;
    roomId -= 1000 - 1;
    if (!(tempStorage.roomInfo.id && tempStorage.roomInfo.id === roomId)) {
      const info = db.queryRoomInfoByRoomId(roomId);
      const reviews = db.queryReviewsByRoomId({ roomId });
      [tempStorage.roomInfo, tempStorage.allQueryReviews] = await Promise.all([info, reviews]);
      tempStorage.totalNumberResults = tempStorage.allQueryReviews.length;
    }
    res.status(200).json(getQueryParams(req.query));
  } catch (err) {
    next(err);
  }
});

// handle POST requests for /rooms
router.post('/:roomId', async (req, res, next) => {
  try {
    let { roomId } = req.params;
    roomId -= 1000 - 1;
    const queryObj = { roomId };
    Object.assign(queryObj, req.body);
    const reviews = db.queryReviewsByRoomId(queryObj);
    tempStorage.allQueryReviews = await reviews;
    tempStorage.totalNumberResults = tempStorage.allQueryReviews.length;
    res.status(200).json(getQueryParams(req.query));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
