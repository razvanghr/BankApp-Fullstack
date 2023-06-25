const mysql = require("mysql2");
require("dotenv").config();

module.exports = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.database,
});
