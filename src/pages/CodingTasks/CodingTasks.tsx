import React from 'react';
import {Typography, Box} from '@mui/material';

import PageHeader from 'components/PageHeader';

function CodingTasks() {
  return (
    <Box>
      <PageHeader title="Coding Tasks" />
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
