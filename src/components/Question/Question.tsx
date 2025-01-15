import React, {useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {QuestionProps} from './types';
import {CodeBlock} from '../CodeBlock';

function Question({question, answer}: QuestionProps) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="question-content" id="question-header">
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
      <AccordionDetails>
        <CodeBlock code="const hello = 'world';" language="javascript" title="example.js" />
      </AccordionDetails>
    </Accordion>
  );
}

export default Question;
