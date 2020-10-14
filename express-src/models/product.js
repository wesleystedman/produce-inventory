const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    plu: String, // what it is
    status: String, // where it is - incoming, warehouse, or shipped out
    // TODO: break location up so we can track it over time
    location: String, // where it is - warehouse name, boat id, truck id, etc.
    grower: String, // who it came from (so we can pay them)
    // TODO: investigate alternatives to quantity for units and whatnot
    quantity: mongoose.Types.Decimal128, // how much we have (so we can sell it)
    notes: String, // i.e. what's wrong with it
    soldPrice: mongoose.Types.Decimal128 // how much it sold for
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);