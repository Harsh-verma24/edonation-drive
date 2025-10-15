const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// Add Location
router.post('/', async (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  try {
    const location = new Location({ name, address, latitude, longitude });
    await location.save();
    res.status(201).json({ message: 'Location added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;