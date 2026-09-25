const sql = require("mssql");
require("dotenv").config();

var config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        enableArithAbort: true,
        trustServerCertificate: true,
        encrypt: false
    }
}

const pool = new sql.ConnectionPool(config);

pool.connect().then(() => {
    try {
        console.log("Connected to the database");
    } catch (err) {
        console.error("Error connecting to the database", err);
    }
});

module.exports = pool;