import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h1">Welcome to My Awesome App</Typography>
      <Typography variant="h5" style={{ margin: '20px' }}>
        Harness the power of AI and modern technology.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Container>
  );
};

export default HomePage;
