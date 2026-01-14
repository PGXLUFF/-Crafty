const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

// Create new contact
router.post('/', async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body;

    // Validation
    if (!name || !company || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Create contact
    const contact = new Contact({
      name,
      company,
      email,
      phone,
      message,
      submittedAt: new Date()
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
});

// Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ submittedAt: -1 })
      .limit(100);
    
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// Get single contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact'
    });
  }
});

// Update contact status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'contacted', 'resolved'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating contact'
    });
  }
});

// Delete contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting contact'
    });
  }
});

module.exports = router;