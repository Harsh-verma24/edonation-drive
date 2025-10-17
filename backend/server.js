const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const donationRoutes = require('./routes/donationRoutes');
const locationRoutes = require('./routes/locationRoutes');
const productRoutes = require('./routes/productRoutes');
const rewardRoutes = require('./routes/rewardRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const cors = require('cors');

// Enable CORS
app.use(cors());

// Connect to MongoDB
connectDB();

app.use(express.json());

// Make sure Express can parse urlencoded bodies (for Stripe webhook or form posts if needed)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('ReLife Backend is running');
});

app.use('/api/users', userRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/products', productRoutes);
app.use('/api/rewards', rewardRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});