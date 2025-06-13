import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import '@fontsource/playfair-display';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6f4e37' /* Espresso brown */ },
    secondary: { main: '#bfa980' /* Gold/latte */ },
    background: { default: '#f8f5f2', paper: '#fff' },
    text: { primary: '#3e2723', secondary: '#bfa980' },
  },
  typography: {
    fontFamily: 'Playfair Display, serif',
    h4: { fontWeight: 700, letterSpacing: 1, textTransform: 'none', color: '#6f4e37' },
    h5: { fontWeight: 700, letterSpacing: 0.5, textTransform: 'none', color: '#6f4e37' },
    button: { fontFamily: 'inherit', fontWeight: 700, letterSpacing: 1 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 24, background: 'linear-gradient(90deg, #bfa980 0%, #6f4e37 100%)', color: '#fff', boxShadow: '0 2px 8px rgba(111, 78, 55, 0.15)', textTransform: 'none', fontWeight: 700, fontSize: 16, padding: '10px 28px' } } },
    MuiPaper: { styleOverrides: { root: { borderRadius: 24, boxShadow: '0 4px 32px 0 rgba(191, 169, 128, 0.10)', border: '1px solid #e0c9a6', background: '#fff' } } },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
