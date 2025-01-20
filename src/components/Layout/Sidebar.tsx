import React from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, Box, Divider} from '@mui/material';
import {Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon} from '@mui/icons-material';
import {menuItems} from './constants';
import {useTheme} from '../../theme/ThemeContext';

function Sidebar() {
  const {mode, toggleTheme} = useTheme();
  const location = useLocation();

  return (
    <Box component="nav" sx={{width: {md: 280}, flexShrink: {md: 0}}}>
      <Drawer
        open
        variant="permanent"
        sx={{
          display: {xs: 'none', md: 'block'},
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            px: 2,
          },
        }}
      >
        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <Box
            sx={{
              py: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '-0.5px',
              }}
            >
              Interview Prep
            </Typography>
            <IconButton
              onClick={toggleTheme}
              sx={{
                backgroundColor: mode === 'dark' ? 'rgba(241, 245, 249, 0.05)' : 'rgba(30, 41, 59, 0.05)',
                '&:hover': {
                  backgroundColor: mode === 'dark' ? 'rgba(241, 245, 249, 0.1)' : 'rgba(30, 41, 59, 0.1)',
                },
              }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
          <Divider sx={{my: 2}} />
          <List sx={{flex: 1}}>
            {menuItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: isActive ? 'primary.main' : 'text.primary',
                    backgroundColor: isActive
                      ? mode === 'dark'
                        ? 'rgba(99, 102, 241, 0.15)'
                        : 'rgba(99, 102, 241, 0.1)'
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: isActive
                        ? mode === 'dark'
                          ? 'rgba(99, 102, 241, 0.2)'
                          : 'rgba(99, 102, 241, 0.15)'
                        : mode === 'dark'
                          ? 'rgba(241, 245, 249, 0.05)'
                          : 'rgba(30, 41, 59, 0.05)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? 'primary.main' : 'text.primary',
                      minWidth: 40,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '0.9375rem',
                      fontWeight: isActive ? 600 : 500,
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
