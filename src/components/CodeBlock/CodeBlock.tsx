import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Paper, Typography, Box} from '@mui/material';

import {CodeBlockProps} from './types';

export const CodeBlock = ({code, language, title}: CodeBlockProps) => {
  return (
    <Paper elevation={3} sx={{overflow: 'hidden'}}>
      {title && (
        <Box sx={{backgroundColor: 'primary.main', padding: 1}}>
          <Typography variant="subtitle2" color="white">
            {title}
          </Typography>
        </Box>
      )}
      <Box p={2}>
        <SyntaxHighlighter language={language} style={materialDark}>
          {code}
        </SyntaxHighlighter>
      </Box>
    </Paper>
  );
};
