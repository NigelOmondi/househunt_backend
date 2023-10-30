const Inquiry = require('../models/inquiryModel');
const mongoose = require('mongoose');

// GET all inquiries
const getInquiries = async (req, res) => {
    const inquiries = await Inquiry.find({}).sort({createdAt: -1});
    res.status(200).json(inquiries)
}

// GET a particular inquiry
const getInquiry = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such inquiry with ObjectId in the Database'})
    }

    const inquiry = await Inquiry.findById(id);
    
    if (!inquiry) {
        return res.status(404).json({error: 'No such inquiry in our database'})
    }
    res.status(200).json(inquiry)
} 

// POST a new inquiry
const createInquiry = async (req, res) => {
    const { name, email, remarks } = req.body;
    
    // Add a inquiry to the database
    try {
        const inquiry = await Inquiry.create({name, email, remarks})
        
        res.status(200).json(inquiry)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



// DELETE an inquiry
const deleteInquiry = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such inquiry with ObjectId in the Database'})
    }

    const inquiry = await Inquiry.findOneAndDelete({_id: id})

    if (!inquiry) {
        return res.status(404).json({error: 'No such inquiry in our database'})
    }
    res.status(200).json(inquiry)
}


// UPDATE an inquiry
const updateInquiry = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such inquiry with ObjectId in the Database'})
    }
    const inquiry = await Inquiry.findOneAndUpdate({_id: id}, {...req.body})

    if (!inqury) {
        return res.status(404).json({error: 'No such house in our database'})
    }
    res.status(200).json(inquiry)
}

module.exports = { 
    createInquiry,
    getInquiries,
    getInquiry,
    deleteInquiry,
    updateInquiry
};