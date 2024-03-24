const { Pool } = require("pg");
require("dotenv").config();

// const query = (sql, values = []) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const pool = openDB();
//       const result = await pool.query(sql, values);
//       resolve(result);
//     } catch (error) {
//       reject(error.message);
//     }
//   });
// };
const query = async (sql, values = []) => {
  try {
    const pool = await openDb(); // Assuming openDb() returns a Promise that resolves to a connection pool
    const result = await pool.query(sql, values);
    return result;
  } catch (error) {
    throw error; // Rethrow the error for better error handling and debugging
  }
};
const openDb = () => {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.SSL,

  });
  // console.log(process.env.DB_USER, process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PASSWORD, process.env.DB_PORT, process.env.SSL);
  return pool;
};

module.exports = {
  query,
};
// const openDB = () => {
//   const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: "Warstick$",
//     port: process.env.DB_PORT,
//   });
//   return pool;
// };
// module.exports = {
//   query,
// };
