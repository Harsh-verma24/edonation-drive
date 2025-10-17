const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');
const { upload, streamUpload } = require('../middleware/upload');
const Product = require('../models/Product');

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

    // If the client requested to create a product as well, create it using the donated data
    if (req.body.createProduct === 'true') {
      try {
        const name = req.body.productName || donation.itemType;
        const description = req.body.productDescription || `Donated: ${donation.itemType}`;
        const price = Number(req.body.productPrice) || 0;
        const stock = Number(req.body.productStock) || 1;
        const productData = { name, description, price, stock, imageUrl: donation.imageUrl };
        const product = new Product(productData);
        await product.save();
        return res.status(201).json({ message: 'Donation and product created', donation, product });
      } catch (prodErr) {
        console.error('Product create error:', prodErr);
        return res.status(201).json({ message: 'Donation saved but product creation failed', donation, productError: prodErr.message });
      }
    }

    res.status(201).json({ message: 'Donation added successfully', donation });
  } catch (error) {
    console.error('Donation save error:', error);
    res.status(400).json({ error: error.message || 'Donation validation failed' });
  }
});

module.exports = router;