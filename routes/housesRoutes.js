const express = require('express');
const House = require("../models/houseModel");
const {
    createHouse,
    getHouses,
    getHouse,
    deleteHouse,
    updateHouse
} = require('../controllers/housesControllers');

const router = express.Router();


// GET all houses
router.get('/all', getHouses)

// GET a particular house
router.get('/:id', getHouse)

// POST a new house
router.post('/all', createHouse)

// DELETE a house
router.delete('/:id', deleteHouse)

// UPDATE a house
router.patch('/:id', updateHouse)

module.exports = router;