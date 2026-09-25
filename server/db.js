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

sql.connect(config, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});