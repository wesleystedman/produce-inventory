const Product = require('../models/product');

module.exports = {
    getAll,
    create,
    update,
    delete: deleteOne,
};

async function getAll(req, res) {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ err });
    }
}

async function create(req, res) {
    try {
        const newProduct = await Product.create(req.body);
        getAll(req, res);
    } catch (err) {
        res.status(400).json({ err });
    }
}

async function update(req, res) {
    try {
        
    } catch (err) {

    }
}

async function deleteOne(req, res) {
    try {

    } catch (err) {

    }
}

