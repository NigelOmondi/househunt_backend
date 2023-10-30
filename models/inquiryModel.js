const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);