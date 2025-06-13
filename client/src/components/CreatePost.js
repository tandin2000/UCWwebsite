import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from '@mui/material';
import axios from 'axios';
import { API_BASE_URL } from '../config';

function CreatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const userId = localStorage.getItem('userId');
    if (!userId) {
      setError('Please register first');
      setTimeout(() => navigate('/register'), 2000);
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/post`, {
        ...formData,
        user_id: userId,
      });
      setSuccess('Post created successfully!');
      setFormData({ title: '', description: '', image_url: '' });
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError("Please register first");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Create New Post
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
          required
          multiline
          rows={4}
        />
        <TextField
          fullWidth
          label="Image URL"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          margin="normal"
          placeholder="https://example.com/image.jpg"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Create Post
        </Button>
      </Box>
    </Paper>
  );
}

export default CreatePost; 