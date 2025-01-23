import React from 'react';
import {Grid} from '@mui/material';
import SectionCard from 'components/SectionCard/SectionCard';

import {sections} from './sections';

function Home() {
  return (
    <Grid container spacing={3}>
      {sections.map((section, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <SectionCard {...section} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
