const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const dotenv = require('dotenv');
dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Create a PaymentIntent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body;
    if (!amount) return res.status(400).json({ message: 'Amount is required' });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // dollars -> cents
      currency,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Payment creation failed', error: error.message });
  }
});

// Create a Stripe Checkout Session (simpler redirect flow)
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { name, amount, currency = 'usd', image } = req.body;
    if (!amount || !name) return res.status(400).json({ message: 'name and amount are required' });

    // Determine success/cancel URLs
    const origin = req.get('origin') || process.env.FRONTEND_URL || 'http://localhost:5173';
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name,
              images: image ? [image] : [],
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Checkout session error:', error);
    res.status(500).json({ message: 'Checkout session creation failed', error: error.message });
  }
});

module.exports = router;
