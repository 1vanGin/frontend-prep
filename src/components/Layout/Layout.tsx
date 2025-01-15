import React from 'react';
import {Box} from '@mui/material';
import Sidebar from './Sidebar';

import {LayoutProps} from './types';

function Layout({children}: LayoutProps) {
  return (
    <Box sx={{display: 'flex'}}>
      <Sidebar />
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
