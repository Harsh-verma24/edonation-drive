const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add Product
router.post('/', async (req, res) => {
  const { name, description, price, stock, imageUrl } = req.body;
  try {
    const product = new Product({ name, description, price, stock, imageUrl });
    await product.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;