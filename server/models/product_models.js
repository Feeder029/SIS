const pool = require("../db.js");

const getAllProducts = async (req, res) => {
    const result = await pool.request().query("SELECT * FROM products");
    return result.recordset;
};

module.exports = {
    getAllProducts
};
