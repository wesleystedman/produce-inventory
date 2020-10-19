const Pallet = require('../models/pallet');

module.exports = {
    getAll,
    create,
    update,
    deleteOne,
};

async function getAll(req, res) {
    try {
        const pallets = await Pallet.find({});
        res.status(200).json(pallets);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const pallet = await Pallet.create(req.body);
        res.status(201).json(pallet);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const pallet = await Pallet.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(pallet);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteOne(req, res) {
    try {
        await Pallet.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: 'pallet deleted'});
    } catch (err) {
        res.status(400).json(err);
    }
}

