import React from 'react';
import {Grid, Typography} from '@mui/material';
import SectionCard from '../../components/SectionCard/SectionCard';
import {sections} from './sections';

function Home() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        React Developer Interview Prep
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SectionCard {...section} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
