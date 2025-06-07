const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// Register new user
router.post('/register', async (req, res) => {
  try {
    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ error: 'Username is required' });
    }

    // Insert user
    const [result] = await pool.query(
      'INSERT INTO users (name) VALUES (?)',
      [name]
    );

    res.status(201).json({
      message: 'User registered successfully',
      userId: result.insertId
    });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Username already exists' });
    }
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

module.exports = router; 