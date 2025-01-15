import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  Box,
} from '@mui/material';
import {
  Code as CodeIcon,
  Javascript as JavaScriptIcon,
  Language as TypeScriptIcon,
  QuestionAnswer as InterviewIcon,
  Assignment as TaskIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material';

interface MenuItem {
  text: string;
  icon: React.ReactElement;
  path: string;
}

const menuItems: MenuItem[] = [
  {text: 'JavaScript', icon: <JavaScriptIcon />, path: '/javascript'},
  {text: 'React', icon: <CodeIcon />, path: '/react'},
  {text: 'TypeScript', icon: <TypeScriptIcon />, path: '/typescript'},
  {text: 'Interview Questions', icon: <InterviewIcon />, path: '/interview-questions'},
  {text: 'Coding Tasks', icon: <TaskIcon />, path: '/coding-tasks'},
];

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

function Sidebar({mobileOpen, handleDrawerToggle}: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    // You would typically update your theme here
  };

  const drawer = (
    <div>
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
    </div>
  );

  return (
    <Box component="nav" sx={{width: {md: 240}, flexShrink: {md: 0}}}>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', md: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240},
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            display: {xs: 'none', md: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240},
          }}
          open
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
}

export default Sidebar;
