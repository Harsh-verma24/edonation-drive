const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');
const { upload, streamUpload } = require('../middleware/upload');

// Add Donation with Image Upload
router.post('/', upload.single('image'), async (req, res) => {
  const { userId, itemType, quantity, dropLocation } = req.body;

  try {
    let imageUrl = null;
    if (req.file) {
      // prefer in-memory buffer (when multer.memoryStorage is used), otherwise read disk file
      const buffer = req.file.buffer || require('fs').readFileSync(req.file.path);
      const result = await streamUpload(buffer);
      imageUrl = result?.secure_url || null;
    }

    const donationData = { itemType, quantity, dropLocation, imageUrl };
    if (userId) donationData.userId = userId;

    const donation = new Donation(donationData);
    await donation.save();
    res.status(201).json({ message: 'Donation added successfully', donation });
  } catch (error) {
    console.error('Donation save error:', error);
    res.status(400).json({ error: error.message || 'Donation validation failed' });
  }
});

module.exports = router;