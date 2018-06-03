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

module.exports = {

};
