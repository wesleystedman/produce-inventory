const Product = require('../models/product');

module.exports = {
    getAll,
    create,
    update,
    deleteOne,
};

async function getAll(req, res) {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const product = await Product.create(req.body);
        // TODO: return all, or return newly created?
        // getAll(req, res);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteOne(req, res) {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: 'product deleted'});
    } catch (err) {
        res.status(400).json(err);
    }
}

