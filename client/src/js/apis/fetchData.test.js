// jest file

import fetchData from './fetchData';
import db from '../../../../database/index';

describe('api call tests', () => {
  describe('getRoomInfo function tests', () => {
    test('getRoomInfo response should have the following fetures', (done) => {
      const numberReviewsPerPage = 7;
      let roomId = 1002;
      (async () => {
        const roomInfo = await fetchData.getRoomInfo(roomId, numberReviewsPerPage);
        expect(roomInfo).toHaveProperty('totalNumberResults');
        expect(roomInfo).toHaveProperty('roomInfo');
        expect(roomInfo).toHaveProperty('reviews');
        expect(typeof roomInfo.totalNumberResults).toBe('number');
        expect(roomInfo.roomInfo).toBeInstanceOf(Object);
        expect(roomInfo.reviews).toBeInstanceOf(Array);
        roomId -= 999;
        roomInfo.roomInfo.id -= 999;
        const expectedRoomInfo = await db.queryRoomInfoByRoomId(roomId);
        expect(roomInfo.roomInfo).toEqual(expectedRoomInfo);
        const expectedReviews = await db.queryReviewsByRoomId({ roomId });
        expect(roomInfo.totalNumberResults).toBe(expectedReviews.length);
        expect(roomInfo.reviews).toEqual(expectedReviews.slice(0, numberReviewsPerPage));
        done();
      })();
    });
  });

  describe('getReviewPage function tests', () => {
    test('getReviewPage response should have the following fetures', (done) => {
      const numberReviewsPerPage = 7;
      const pageNum = 2;
      let roomId = 1002;
      (async () => {
        const reviewPage = await fetchData.getReviewPage(roomId, pageNum, numberReviewsPerPage);
        expect(reviewPage).toHaveProperty('totalNumberResults');
        expect(reviewPage).toHaveProperty('reviews');
        expect(typeof reviewPage.totalNumberResults).toBe('number');
        expect(reviewPage.reviews).toBeInstanceOf(Array);
        roomId -= 999;
        const expectedReviews = await db.queryReviewsByRoomId({ roomId });
        expect(reviewPage.totalNumberResults).toBe(expectedReviews.length);
        expect(reviewPage.reviews).toEqual(expectedReviews.slice(
          (pageNum - 1) * numberReviewsPerPage,
          pageNum * numberReviewsPerPage,
        ));
        done();
      })();
    });
  });

  describe('getQueriedReviews function tests', () => {
    test('getQueriedReviews response should have the following fetures', (done) => {
      const numberReviewsPerPage = 7;
      const keyword = 'able';
      const sortBy = ['communication', -1];
      let roomId = 1002;
      (async () => {
        const queriedReviews = await fetchData.getQueriedReviews(
          roomId,
          keyword,
          sortBy,
          numberReviewsPerPage,
        );
        expect(queriedReviews).toHaveProperty('totalNumberResults');
        expect(queriedReviews).toHaveProperty('reviews');
        expect(typeof queriedReviews.totalNumberResults).toBe('number');
        expect(queriedReviews.reviews).toBeInstanceOf(Array);
        roomId -= 999;
        const expectedReviews = await db.queryReviewsByRoomId({ roomId, keyword, sortBy });
        expect(queriedReviews.totalNumberResults).toBe(expectedReviews.length);
        expect(queriedReviews.reviews).toEqual(expectedReviews.slice(0, numberReviewsPerPage));
        done();
      })();
    });
  });
});
