import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, 
  ListItemText, Card, CardContent, Grid, Box, useTheme, useMediaQuery,
  Chip, Avatar
} from '@mui/material';
import { Menu as MenuIcon, DashboardOutlined, Analytics, Assessment, Settings } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%) !important;
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 240px;
    background: linear-gradient(180deg, #303f9f 0%, #1976d2 100%);
    color: white;
  }
`;

const MainContent = styled(Box)`
  flex-grow: 1;
  padding: 24px;
  margin-left: ${props => props.open && !props.mobile ? '240px' : '0'};
  transition: margin-left 0.3s;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  min-height: 100vh;
`;

const StyledCard = styled(Card)`
  height: 100%;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
`;

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const cardData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Analytics ${i + 1}`,
    content: `Dashboard metrics ${i + 1}`,
    color: ['primary', 'secondary', 'success', 'warning', 'info', 'error'][i % 6]
  }));

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardOutlined /> },
    { text: 'Analytics', icon: <Analytics /> },
    { text: 'Reports', icon: <Assessment /> },
    { text: 'Settings', icon: <Settings /> }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setSidebarOpen(!sidebarOpen)} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Dashboard Analytics
          </Typography>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>D</Avatar>
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
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
      </StyledDrawer>

      <MainContent open={sidebarOpen} mobile={isMobile}>
        <Toolbar />
        
        <Grid container spacing={3}>
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <StyledCard>
                <CardContent sx={{ bgcolor: `${card.color}.main`, color: 'white', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {card.title}
                    </Typography>
                    <Chip label="+12%" size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {Math.floor(Math.random() * 1000) + 100}
                  </Typography>
                  <Typography variant="body2">
                    {card.content}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, p: 3, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Responsive Grid Columns:
          </Typography>
          <Typography variant="body2">
            xs: 1 column | sm: 2 columns | md: 3 columns | lg+: 4 columns
          </Typography>
        </Box>
      </MainContent>
    </Box>
  );
};

export default Dashboard;