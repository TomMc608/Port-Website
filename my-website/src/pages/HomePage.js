
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '50px', position: 'absolute', top: '0', left: '0', zIndex: '1', color: 'white' }}>  {/* Keep text at original position and make it white */}
      <Typography variant="h1" style={{ color: 'white' }}>Welcome to My Awesome App</Typography>
      <Typography variant="h5" style={{ margin: '20px', color: 'white' }}>
        Harness the power of AI and modern technology.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Container>
  );
};

export default HomePage;
