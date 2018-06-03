const mysql = require('mysql');
const mysqlConfig = require('./config');

class MySqlDatabase {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  query(options) {
    const context = this;
    return new Promise((resolve, reject) => {
      context.connection.query(options, (err, data, fields) => {
        if (err) { reject(err); }
        resolve(data, fields);
      });
    });
  }
}

const connection = new MySqlDatabase(mysqlConfig);

const insertRecord = (tableName, recordObjs) => {
  const queryOptions = {
    sql: Array(recordObjs.length + 1).join(`INSERT INTO ${tableName} SET ?;`),
    values: recordObjs,
  };
  return connection.query(queryOptions)
    .then(results => JSON.parse(JSON.stringify(results)));
};

const truncateAllTables = () => connection.query(`SET FOREIGN_KEY_CHECKS = 0;
  TRUNCATE users;
  TRUNCATE rooms;
  TRUNCATE reviews;
  SET FOREIGN_KEY_CHECKS = 1;`)
  .then(results => JSON.parse(JSON.stringify(results)));

// const queryReviewsByRoomId = (room_id, queryObj) => {

// };

module.exports = {
  insertRecord,
  truncateAllTables,
};
