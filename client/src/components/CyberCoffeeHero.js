import React from 'react';
import { Box, Typography, Divider, Container } from '@mui/material';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

export default function ElegantCoffeeHero() {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        mb: 2,
        background: 'linear-gradient(135deg, #f8f5f2 0%, #e0c9a6 100%)',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80") center/cover',
          opacity: 0.1,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            py: 2,
            px: 2,
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalCafeIcon 
              sx={{ 
                fontSize: 24,
                color: '#6f4e37',
                filter: 'drop-shadow(0 2px 4px rgba(111, 78, 55, 0.2))'
              }} 
            />
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                color: '#6f4e37',
                letterSpacing: 0.5,
                textShadow: '0 2px 4px rgba(111, 78, 55, 0.1)'
              }}
            >
              Elegant Coffee Shop
            </Typography>
          </Box>
          <Divider 
            sx={{ 
              my: 1,
              borderColor: 'rgba(191, 169, 128, 0.3)',
              width: '60px',
              borderWidth: 1
            }} 
          />
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#bfa980',
              fontWeight: 500,
              letterSpacing: 0.3
            }}
          >
            Share Your Coffee Journey
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#6f4e37',
              maxWidth: '500px',
              opacity: 0.8,
              lineHeight: 1.3
            }}
          >
            Discover, share, and connect through the art of coffee. 
            Join our community of coffee enthusiasts and share your favorite moments, 
            recipes, and experiences.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 