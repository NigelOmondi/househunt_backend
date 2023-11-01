require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const houseRoutes = require('./routes/housesRoutes');
const inquiryRoutes = require('./routes/inquiriesRoutes');

// Express app
const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000', 'https://househunt.onrender.com'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));




app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes for handling houses
app.use('/api/houses', houseRoutes)

// Routes for handling inquiries
app.use('/api/inquiries', inquiryRoutes)

// Connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen to requests after connecting to DB
    app.listen(process.env.PORT, () => {
        console.log('Nigel, you are connected to MongoDB and listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
