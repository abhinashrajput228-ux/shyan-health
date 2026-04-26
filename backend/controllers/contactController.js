const { db } = require('../config/firebase');
const { collection, addDoc, serverTimestamp } = require('firebase/firestore');

// @desc    Submit contact form
// @route   POST /api/contact
const submitContactForm = async (req, res) => {
  const { name, phone, email, goal, message } = req.body;

  try {
    // 1. Save to Firestore (If initialized)
    if (db) {
      await addDoc(collection(db, "contacts"), {
        name,
        phone,
        email,
        goal,
        message,
        createdAt: serverTimestamp()
      });
      console.log('✅ Contact form saved to Firestore');
    }

    // 2. Fallback or additional logic (e.g. Email notification)
    res.status(201).json({ 
      success: true, 
      message: 'Thank you! Your message has been received.' 
    });

  } catch (error) {
    console.error('❌ Error saving contact form:', error.message);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

module.exports = { submitContactForm };
