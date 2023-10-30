const House = require('../models/houseModel');
const mongoose = require('mongoose');

// GET all houses
const getHouses = async (req, res) => {
    const houses = await House.find({}).sort({createdAt: -1});
    res.status(200).json(houses)
}

// GET a particular house
const getHouse = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such house with ObjectId in the Database'})
    }

    const house = await House.findById(id);
    
    if (!house) {
        return res.status(404).json({error: 'No such house in our database'})
    }
    res.status(200).json(house)
} 

// POST a new house
const createHouse = async (req, res) => {
    const { id, address, county, description, price, photo } = req.body;
    
    // Add a house to the database
    try {
        const house = await House.create({id, address, county, description, price, photo})
        
        res.status(200).json(house)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



// DELETE a house
const deleteHouse = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such house with ObjectId in the Database'})
    }

    const house = await House.findOneAndDelete({_id: id})

    if (!house) {
        return res.status(404).json({error: 'No such house in our database'})
    }
    res.status(200).json(house)
}


// UPDATE a house
const updateHouse = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such house with ObjectId in the Database'})
    }
    const house = await House.findOneAndUpdate({_id: id}, {...req.body})

    if (!house) {
        return res.status(404).json({error: 'No such house in our database'})
    }
    res.status(200).json(house)
}

module.exports = { 
    createHouse,
    getHouses,
    getHouse,
    deleteHouse,
    updateHouse
};