const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({
        message: "get all"
    });
});

routes.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        data: {
            id
        }
    });
});

routes.post('/', (req, res) => {
    const { name, category, quantity, price } = req.body;
    res.json({
       data: {
            name,
            category,
            quantity,
            price
        }
    });
});

routes.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, category, quantity, price } = req.body;
    res.json({
        data: {
            id,
            name,
            category,
            quantity,
            price
        }
    });
});

routes.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        data: {
            id
        }
    });
});

module.exports = routes;