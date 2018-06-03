const randomGenerator = require('./randomGenerator');
const db = require('./index');


const numUsers = randomGenerator.generateInteger(1000, 100);
const userObjs =[];

for (let i = 0; i < numUsers; i++) {
  userObjs[i] = {
    userName: randomGenerator.generateString(null, 10, 3),
    icon: randomGenerator.generateString(null, 50, 10, randomGenerator.generateCharArray('a','z',false,['-', '.', '//'])),
  };
}

let numReviews;
const reviewObjs =[];
const zeroReviewRates = {
  accuracy: 0,
  communication: 0,
  cleanliness: 0,
  location: 0,
  checkIn: 0,
  value: 0,
}
let avgReviewRates;
let reviewRates = {};

const numRooms = 100;
const roomObjs = [];

for (let i = 0; i < numRooms; i++) {
  numReviews = randomGenerator.generateInteger(200, 0);
  avgReviewRates = Object.assign({}, zeroReviewRates);
  for (let j = 0; j < numReviews; j++) {
    for (let key of Object.keys(zeroReviewRates)) {
      reviewRates[key] = randomGenerator.generateInteger(5, 3);
      avgReviewRates[key] = (avgReviewRates[key] * j + reviewRates[key]) / (j + 1);
    }
    reviewObjs.push(Object.assign({
      user_id: randomGenerator.generateInteger(numUsers, 1),
      room_id: i + 1,
      text: randomGenerator.generateWords(null,1000, 80, 6),
      date: randomGenerator.generateDateString('2018-6-2', '2010-1-1'),
    }, reviewRates));
  }


  roomObjs[i] = Object.assign({
    roomName: randomGenerator.generateWords(),
    totalNumberReviews: numReviews,
  }, avgReviewRates);
}

db.truncateAllTables()
  .then(db.insertRecord('users', userObjs))
  .catch(err => console.log('usersError: ', err))
  .then(db.insertRecord('rooms', roomObjs))
  .catch(err => console.log('roomsError: ', err))
  .then(db.insertRecord('reviews', reviewObjs))
  .catch(err => console.log('reviewsError: ', err))
  .then(() => console.log('done'));