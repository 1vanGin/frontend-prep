import React from 'react';
import {Box} from '@mui/material';
import Sidebar from './Sidebar';
import {LayoutProps} from './types';
import {useTheme} from '../../theme/ThemeContext';
import {colors} from '../../shared/colors';

function Layout({children}: LayoutProps) {
  const {mode} = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: colors.background[mode].default,
        backgroundImage: colors.gradients[mode],
      }}
    >
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {md: `calc(100% - ${280}px)`},
          p: 4,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            overflow: 'hidden',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
