const axios = require('axios');
const crypto = require('crypto');

/**
 * Hash user data for Meta Conversions API (SHA256)
 */
const hashData = (data) => {
  if (!data) return null;
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
};

/**
 * Send event to Meta Conversions API
 */
const trackPurchase = async (req, res) => {
  const { email, phone, value, currency, orderId, clientIpAddress, userAgent } = req.body;

  const PIXEL_ID = process.env.META_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.error('Meta Pixel ID or Access Token missing in .env');
    return res.status(500).json({ message: 'Meta configuration missing' });
  }

  const eventData = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: req.headers.referer || 'https://shyanhealth.com/',
        user_data: {
          em: [hashData(email)],
          ph: [hashData(phone)],
          client_ip_address: clientIpAddress || req.ip,
          client_user_agent: userAgent || req.headers['user-agent'],
        },
        custom_data: {
          currency: currency || 'INR',
          value: value || '0.00',
          order_id: orderId,
        },
      },
    ],
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      eventData
    );
    res.status(200).json({ message: 'Event tracked successfully', data: response.data });
  } catch (error) {
    console.error('Meta CAPI Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error tracking event', error: error.response ? error.response.data : error.message });
  }
};

module.exports = {
  trackPurchase,
};
