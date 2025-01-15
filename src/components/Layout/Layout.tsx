import React, {useState} from 'react';
import {
  Box,
  // useTheme
} from '@mui/material';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {md: `calc(100% - ${240}px)`},
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
