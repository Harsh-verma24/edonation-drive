const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pointsEarned: { type: Number, required: true },
  couponCode: { type: String, required: true },
});

module.exports = mongoose.model('Reward', rewardSchema);