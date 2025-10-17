const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  // userId is optional for now; if you add auth later set this from the logged-in user
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  itemType: { type: String, required: true },
  quantity: { type: Number, required: true },
  dropLocation: { type: String, required: true },
  imageUrl: { type: String },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Donation', donationSchema);