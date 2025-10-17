const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');
const upload = require('../middleware/upload');

// Add Donation with Image Upload
router.post('/', upload.single('image'), async (req, res) => {
  const { userId, itemType, quantity, dropLocation } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const donation = new Donation({ userId, itemType, quantity, dropLocation, image });
    await donation.save();
    res.status(201).json({ message: 'Donation added successfully', donation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;