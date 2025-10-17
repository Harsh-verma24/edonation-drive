const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  // if you use authentication, set userId from the logged-in user; keep optional for now
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  itemType: { type: String, required: true },
  quantity: { type: Number, required: true },
  dropLocation: { type: String, required: true },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Donation', donationSchema);