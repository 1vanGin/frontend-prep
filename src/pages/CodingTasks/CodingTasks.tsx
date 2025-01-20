import React from 'react';
import {Typography, Box} from '@mui/material';

function CodingTasks() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Coding Tasks
      </Typography>
      <Typography variant="body1">
        This page will contain coding tasks often given during React developer interviews.
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={2}>
        Content coming soon...
      </Typography>
    </Box>
  );
}

export default CodingTasks;
