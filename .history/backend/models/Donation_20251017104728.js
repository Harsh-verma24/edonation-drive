const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemType: { type: String, required: true },
  quantity: { type: Number, required: true },
  dropLocation: { type: String, required: true },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Donation', donationSchema);