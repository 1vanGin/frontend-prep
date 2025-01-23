import React from 'react';
import {Typography, Box, IconButton} from '@mui/material';
import {ArrowBack} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {PageHeaderProps} from './types';

const PageHeader: React.FC<PageHeaderProps> = ({title, showBackButton = true}) => {
  const navigate = useNavigate();

  const handleBack = async () => {
    await navigate('/');
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: 1, mb: 2}}>
      {showBackButton && (
        <IconButton onClick={handleBack} size="large" sx={{mr: 1}}>
          <ArrowBack />
        </IconButton>
      )}
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;
