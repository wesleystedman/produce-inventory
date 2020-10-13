const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    type: String, // could be PLU#, or variety or something
    status: String, // pending, in warehouse, or shipped out
    location: String, // dependent on status? warehouse name, boat id, or truck id?
    origin: String, // Country/region of origin
    grower: String, // id or name
    quantity: Number, // should probably have a unit, or maybe be an embedded doc?
    notes: [String],
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);