const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// Create a new post
router.post('/post', async (req, res) => {
  try {
    const { title, description, image_url, user_id } = req.body;

    // Validate input
    if (!title || !description || !user_id) {
      return res.status(400).json({ error: 'Title, description, and user_id are required' });
    }

    // Insert post
    const [result] = await pool.query(
      'INSERT INTO posts (title, description, image_url, user_id) VALUES (?, ?, ?, ?)',
      [title, description, image_url, user_id]
    );

    res.status(201).json({
      message: 'Post created successfully',
      postId: result.insertId
    });
  } catch (error) {
    console.error('Post creation error:', error);
    res.status(500).json({ error: 'Error creating post' });
  }
});

// Get all posts with user information
router.get('/posts', async (req, res) => {
  try {
    const [posts] = await pool.query(`
      SELECT p.*, u.name as author_name 
      FROM posts p 
      JOIN users u ON p.user_id = u.id 
      ORDER BY p.created_at DESC
    `);

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

module.exports = router; 