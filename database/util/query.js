import mysql from 'mysql';
import config from '../../config';

// fetch config for mysql connection
const { mySqlConfig } = config;

// build the db connection pool
const pool = mysql.createPool(mySqlConfig);

/*
 * A generic function for running sql query
 * @param { string } sql the sql statement
 * @return { Promise }
 */
async function query(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
}

export default query;
