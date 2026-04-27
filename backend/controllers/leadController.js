const { db } = require('../config/firebase');
const { collection, addDoc, serverTimestamp } = require('firebase/firestore');

// @desc    Submit lead capture form
// @route   POST /api/leads
const submitLead = async (req, res) => {
  const { name, phone, age, weight, goal, source } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Name and Phone are required' });
  }

  try {
    if (db) {
      await addDoc(collection(db, "leads"), {
        name,
        phone,
        age: age || null,
        weight: weight || null,
        goal,
        source: source || 'popup',
        createdAt: serverTimestamp()
      });
      console.log('✅ Lead saved to Firestore');
    }

    res.status(201).json({ 
      success: true, 
      message: 'Our expert will contact you within 24 hours' 
    });

  } catch (error) {
    console.error('❌ Error saving lead:', error.message);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

module.exports = { submitLead };
