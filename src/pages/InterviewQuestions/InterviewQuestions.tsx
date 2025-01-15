import React from 'react';
import {Typography, Box} from '@mui/material';

function InterviewQuestions() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Interview Questions
      </Typography>
      <Typography variant="body1">
        This page will contain a list of common interview questions for React developers.
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={2}>
        Content coming soon...
      </Typography>
    </Box>
  );
}

export default InterviewQuestions;
