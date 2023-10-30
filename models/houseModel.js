const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const houseSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('House', houseSchema);