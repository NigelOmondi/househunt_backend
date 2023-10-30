const express = require('express');
const Inquiry = require("../models/inquiryModel");
const {
    createInquiry,
    getInquiries,
    getInquiry,
    deleteInquiry,
    updateInquiry
} = require('../controllers/inquiriesControllers');

const router = express.Router();

// GET all inquiries
router.get('/', getInquiries)

// GET a particular inquiry
router.get('/:id', getInquiry)

// POST a new inquiry
router.post('/', createInquiry)

// DELETE an inquiry
router.delete('/:id', deleteInquiry)

// UPDATE an inquiry
router.patch('/:id', updateInquiry)

module.exports = router;