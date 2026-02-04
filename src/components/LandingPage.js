import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Box, Paper } from '@mui/material';

const LandingPage = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
          Responsive Landing Page
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={8} sx={{ bgcolor: 'secondary.main', color: 'white' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Section One
                </Typography>
                <Typography variant="body1">
                  This section stacks on mobile (xs=12) and appears side-by-side on medium+ screens (md=6).
                  Material UI Grid automatically handles responsive breakpoints.
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={8} sx={{ bgcolor: 'success.main', color: 'white' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Section Two
                </Typography>
                <Typography variant="body1">
                  This demonstrates the Grid system with Container and Typography components.
                  Breakpoints: xs (mobile), sm (tablet), md (desktop), lg (large), xl (extra large).
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: 'warning.main', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Feature 1</Typography>
                <Typography variant="body2">xs=12, sm=6, md=4</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: 'info.main', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Feature 2</Typography>
                <Typography variant="body2">Responsive breakpoints</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: 'error.main', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Feature 3</Typography>
                <Typography variant="body2">Material UI Grid</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;