import React, { useState } from 'react';
import { 
  ThemeProvider, createTheme, Box, AppBar, Toolbar, Typography, 
  IconButton, Switch, FormControlLabel, Card, CardContent, Grid, Button,
  Drawer, List, ListItem, ListItemText, useMediaQuery, Chip, Avatar
} from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7, DashboardOutlined, People, Analytics, Security, Settings } from '@mui/icons-material';

const AdminPanel = ({ darkMode, setDarkMode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const adminTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: darkMode ? '#90caf9' : '#1976d2' },
      secondary: { main: darkMode ? '#f48fb1' : '#dc004e' },
      success: { main: '#4caf50' },
      warning: { main: '#ff9800' },
      info: { main: '#2196f3' },
      error: { main: '#f44336' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: darkMode 
              ? '0 8px 32px rgba(0,0,0,0.3)' 
              : '0 8px 32px rgba(0,0,0,0.1)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: darkMode
              ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
              : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          },
        },
      },
    },
  });

  const isMobile = useMediaQuery(adminTheme.breakpoints.down('md'));

  const panelData = [
    { title: 'Users', count: '2,543', color: 'success', icon: <People /> },
    { title: 'Analytics', count: '15,678', color: 'info', icon: <Analytics /> },
    { title: 'Security', count: '99.9%', color: 'warning', icon: <Security /> },
    { title: 'Settings', count: '24', color: 'error', icon: <Settings /> },
  ];

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardOutlined /> },
    { text: 'Users', icon: <People /> },
    { text: 'Analytics', icon: <Analytics /> },
    { text: 'Security', icon: <Security /> },
    { text: 'Settings', icon: <Settings /> },
  ];

  return (
    <ThemeProvider theme={adminTheme}>
      <Box sx={{ 
        display: 'flex', 
        minHeight: '100vh', 
        bgcolor: darkMode ? 'grey.900' : 'grey.100'
      }}>
        <AppBar position="fixed" sx={{ zIndex: 1201 }}>
          <Toolbar>
            <IconButton color="inherit" onClick={() => setSidebarOpen(!sidebarOpen)} edge="start">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Admin Control Panel
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  icon={<Brightness7 />}
                  checkedIcon={<Brightness4 />}
                />
              }
              label=""
            />
            <Avatar sx={{ bgcolor: 'secondary.main', ml: 2 }}>A</Avatar>
          </Toolbar>
        </AppBar>

        <Drawer
          variant={isMobile ? 'temporary' : 'persistent'}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          sx={{ 
            width: 240, 
            '& .MuiDrawer-paper': { 
              width: 240,
              bgcolor: darkMode ? 'grey.800' : 'primary.main',
              color: 'white'
            } 
          }}
        >
          <Toolbar />
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                <Box sx={{ mr: 2 }}>{item.icon}</Box>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: isMobile ? 0 : (sidebarOpen ? '240px' : 0),
            transition: 'margin-left 0.3s',
          }}
        >
          <Toolbar />
          
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {panelData.map((panel, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ bgcolor: `${panel.color}.main`, color: 'white' }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box sx={{ mb: 2, fontSize: '3rem' }}>
                      {panel.icon}
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {panel.count}
                    </Typography>
                    <Typography variant="h6">
                      {panel.title}
                    </Typography>
                    <Chip 
                      label="+12%" 
                      size="small" 
                      sx={{ mt: 1, bgcolor: 'rgba(255,255,255,0.2)' }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Main Control Panel
                  </Typography>
                  <Typography variant="body1" paragraph>
                    This main panel takes up 8/12 columns on large screens (lg+) 
                    and appears side-by-side with the sidebar. On mobile devices, 
                    it collapses to full width (xs=12) and stacks vertically.
                  </Typography>
                  <Button variant="contained" sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' } }}>
                    Primary Action
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <Card sx={{ bgcolor: 'secondary.main', color: 'white', mb: 2 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Side Panel
                  </Typography>
                  <Typography variant="body2" paragraph>
                    This sidebar panel takes up 4/12 columns on large screens 
                    but collapses to full width on mobile devices.
                  </Typography>
                  <Button variant="outlined" fullWidth sx={{ color: 'white', borderColor: 'white' }}>
                    Secondary Action
                  </Button>
                </CardContent>
              </Card>
              
              <Card sx={{ bgcolor: 'success.main', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Quick Stats
                  </Typography>
                  <Typography variant="body2">
                    System Status: Online<br/>
                    Active Users: 1,234<br/>
                    Performance: 98.5%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, p: 3, bgcolor: 'info.main', color: 'white', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Responsive Layout & Theme Features:
            </Typography>
            <Typography variant="body2">
              Mobile (xs-md): Single column | Desktop (lg+): Multi-panel side-by-side<br/>
              Light/Dark theme switching with MUI color palette integration
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminPanel;