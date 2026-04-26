const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

// Use memory storage so we can stream directly to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB max

// @route   POST /api/upload
// @desc    Upload product image to Cloudinary
// @access  Public (protect in production)
router.post('/', upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  try {
    // Convert buffer to base64 stream and upload
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataUri = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: 'shyan-health/products',
      transformation: [
        { width: 800, height: 800, crop: 'limit', quality: 'auto' }
      ]
    });

    res.json({
      url: result.secure_url,
      public_id: result.public_id
    });

  } catch (err) {
    console.error('Upload error:', err.message);
    res.status(500).json({ message: 'Upload failed: ' + err.message });
  }
});

module.exports = router;
