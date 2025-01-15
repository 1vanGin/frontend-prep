import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, Box} from '@mui/material';

import {Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon} from '@mui/icons-material';
import {menuItems} from './constants';

function Sidebar() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box component="nav" sx={{width: {md: 240}, flexShrink: {md: 0}}}>
      <Drawer
        open
        variant="permanent"
        sx={{
          display: {xs: 'none', md: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240},
        }}
      >
        <Box>
          <Box sx={{p: 2}}>
            <Typography variant="h6" component={RouterLink} to="/" sx={{textDecoration: 'none', color: 'inherit'}}>
              Interview Prep
            </Typography>
          </Box>
          <List>
            {menuItems.map(item => (
              <ListItem key={item.text} component={RouterLink} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Box sx={{position: 'absolute', bottom: 0, left: 0, right: 0, p: 2}}>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
