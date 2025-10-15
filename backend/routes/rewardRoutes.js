const express = require('express');
const router = express.Router();
const Reward = require('../models/Reward');

// Add Reward
router.post('/', async (req, res) => {
  const { userId, pointsEarned, couponCode } = req.body;
  try {
    const reward = new Reward({ userId, pointsEarned, couponCode });
    await reward.save();
    res.status(201).json({ message: 'Reward added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;