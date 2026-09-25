const productModel = require("../models/product_models");

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Failed to fetch"
        });
    }
};

module.exports = {
    getAllProducts
};