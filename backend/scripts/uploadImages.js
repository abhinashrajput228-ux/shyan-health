/**
 * Script to upload all existing product images from assets/images
 * to Cloudinary and print the new URLs.
 *
 * Run: node scripts/uploadImages.js
 */

require('dotenv').config({ path: '../.env' });
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../../assets/images');

const productImages = [
  'fat-to-fit-tablets.png',
  'pcos-balance-kit.png',
  'triphala-detox.png',
  'turmeric-glow-capsules.png',
  'ashwagandha-plus.png',
  'shatavari-womens-tonic.png',
  'hero-photo-1.png',
  'hero-photo-2.png',
  'hero-journey.png',
  'natural-ingredients.png',
];

async function uploadAll() {
  console.log('\n🚀 Shyan Health — Cloudinary Image Migration\n');
  const results = {};

  for (const filename of productImages) {
    const filePath = path.join(IMAGES_DIR, filename);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Not found: ${filename}`);
      continue;
    }

    const publicId = `shyan-health/products/${path.basename(filename, path.extname(filename))}`;
    try {
      console.log(`📤 Uploading: ${filename}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        overwrite: true,
        transformation: [{ quality: 'auto', fetch_format: 'auto' }]
      });
      results[filename] = result.secure_url;
      console.log(`   ✅ Done: ${result.secure_url}`);
    } catch (err) {
      console.log(`   ❌ Failed: ${err.message}`);
    }
  }

  console.log('\n\n📋 Final URLs (copy these to index.html):\n');
  for (const [file, url] of Object.entries(results)) {
    console.log(`${file}:`);
    console.log(`  ${url}\n`);
  }
}

uploadAll();
