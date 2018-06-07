const mysql = require('mysql');
const util = require('util');
const mysqlConfig = require('./config');

// create mysql connection
const connection = mysql.createConnection(mysqlConfig);

// promisify connection.query
connection.query = util.promisify(connection.query);

// helper database functions using async/await
const insertRecord = async (tableName, recordObjs) => {
  const queryOptions = {
    sql: Array(recordObjs.length + 1).join(`INSERT INTO ${tableName} SET ?;`),
    values: recordObjs,
  };

  try {
    const data = connection.query(queryOptions);
    return (await data).map(row => Object.assign({}, row));
  } catch (err) {
    throw new Error(`insert ${tableName} error: + ${err.message}`);
  }
};

const truncateAllTables = async () => {
  try {
    const data = connection.query(`SET FOREIGN_KEY_CHECKS = 0;
      TRUNCATE users;
      TRUNCATE rooms;
      TRUNCATE reviews;
      SET FOREIGN_KEY_CHECKS = 1;`);
    return (await data).map(row => Object.assign({}, row));
  } catch (err) {
    throw new Error(`truncate error: + ${err.message}`);
  }
};

const queryReviewsByRoomId = async (queryObj) => {
  let sql = 'SELECT userName, avatar, date, (accuracy + communication + cleanliness + location + checkIn + value)/6 AS aggregateRate, text FROM ' +
    '(select users.userName, users.avatar, reviews.date, reviews.accuracy, reviews.communication, reviews.cleanliness, ' +
    'reviews.location, reviews.checkIn, reviews.value, reviews.text ' +
    `FROM reviews INNER JOIN users ON users.id = reviews.userId WHERE reviews.roomId = ${queryObj.roomId}) AS candidates`;
  if (queryObj.keyword) {
    sql += ` WHERE text LIKE "%${queryObj.keyword}%"`;
  }
  sql += ' ORDER BY ';
  if (queryObj.sortBy && queryObj.sortBy.length) {
    sql += `${queryObj.sortBy[0]}${(queryObj.sortBy[1] === -1) ? ' DESC, ' : ', '}`;
  }
  sql += 'date DESC;';
  try {
    const data = connection.query(sql);
    return (await data).map(row => Object.assign({}, row));
  } catch (err) {
    throw new Error(`query room info error: ${err.message}`);
  }
};

const queryRoomInfoByRoomId = async (roomId) => {
  try {
    const data = connection.query('SELECT * FROM rooms WHERE id = ?;', roomId);
    return Object.assign({}, (await data)[0]);
  } catch (err) {
    throw new Error(`query room info error: ${err.message}`);
  }
};

module.exports = {
  insertRecord,
  truncateAllTables,
  queryReviewsByRoomId,
  queryRoomInfoByRoomId,
};
