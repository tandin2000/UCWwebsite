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

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
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

    try {
      const response = await axios.post(`${API_BASE_URL}/register`, formData);
      setSuccess('Registration successful! You can now create posts.');
      setFormData({ name: '' });
      // Store user ID in localStorage for post creation
      localStorage.setItem('userId', response.data.userId);
      setTimeout(() => navigate('/create-post'), 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Register
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
          placeholder="Enter your username"
          helperText="Choose a unique username to identify yourself"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Register
        </Button>
      </Box>
    </Paper>
  );
}

export default Register; 