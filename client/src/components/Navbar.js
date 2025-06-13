import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, useTheme } from '@mui/material';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

function Navbar() {
  const theme = useTheme();

  return (
    <AppBar 
      position="sticky" 
      elevation={1}
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(191, 169, 128, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 70 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <LocalCafeIcon 
              sx={{ 
                color: theme.palette.primary.main,
                fontSize: 32,
                mr: 1
              }} 
            />
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                color: theme.palette.primary.main,
                textDecoration: 'none',
                letterSpacing: 0.5,
                '&:hover': {
                  color: theme.palette.primary.dark,
                }
              }}
            >
              UCW Coffee
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            '& .MuiButton-root': {
              px: 2,
              py: 1,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(111, 78, 55, 0.08)',
                transform: 'translateY(-1px)'
              }
            }
          }}>
            <Button
              component={RouterLink}
              to="/"
              sx={{ color: theme.palette.text.primary }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/create-post"
              sx={{ color: theme.palette.text.primary }}
            >
              Create Post
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                }
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 