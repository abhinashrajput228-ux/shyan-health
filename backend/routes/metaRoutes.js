const express = require('express');
const router = express.Router();
const { trackPurchase } = require('../controllers/metaController');

// POST /api/meta/track-purchase
router.post('/track-purchase', trackPurchase);

module.exports = router;
