const mongoose = require('mongoose');

const palletSchema = new mongoose.Schema({
    palletID: { // like the license plate of a pallet
        type: String,
        required: true,
        unique: true
    },
    // Product Info
    species: { // what type of fruit it is - usually a 2-digit ID
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    variety: { // what variety of the species - usually a 2-digit ID
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    varietyDesc: { // human-readable variety, title-cased
        type: String,
        set: s => toTitleCase(s)
    },
    size: { // size of the fruit - format has multiple competing standards
        type: String,
        required: true
    },
    packaging: { // semi-arbitrary enums
        type: String,
        required: true
    },
    repack: String, // currently an encoded string, may refactor later
    growerID: String, // data comes from shipper, no consistent format
    labelName: String, // semi-readable code based on growerID
    boxCount: { // # of boxes on pallet
        type: Number,
        required: true,
        min: 0
    },
    fumigated: { // N = not treated (might need fumigation), I = inspected (won't need fumigation)
        type: String,
        enum: ['N','I']
    },
    // status, location, and other metadata
    packDate: Date, // data comes from shipper
    boat: {
        type: String,
        required: true
    },
    arrivalDate: Date,
    warehouseID: String, // which warehouse it's in
    load: String, // what load it will go out on
    status: {
        type: String,
        required: true,
        enum: [
            'pending', // waiting for arrival
            'warehouse', // has arrived, free to be allocated
            'staging', // has been allocated to a load - can't modify properties other than status
            'loading', // is currently being loaded onto a truck - can't modify anything except to mark as shipped out
            'shipped', // has been shipped out
        ],
        default: 'pending'
    },
    isReturned: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
});

function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\W)\w/g, match => match.substr(1).toUpperCase());
}


module.exports = mongoose.model('Pallet', palletSchema);