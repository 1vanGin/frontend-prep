import React from 'react';
import {Grid, Typography} from '@mui/material';
import SectionCard from '../../components/SectionCard/SectionCard';

interface Section {
  title: string;
  topics?: {title: string; link: string}[];
  link: string;
  description?: string;
}

const sections: Section[] = [
  {
    title: 'JavaScript',
    topics: [
      {title: 'Closures', link: '/javascript#closures'},
      {title: 'Promises', link: '/javascript#promises'},
      {title: 'Event Loop', link: '/javascript#event-loop'},
      {title: 'Prototypal Inheritance', link: '/javascript#prototypal-inheritance'},
      {title: 'ES6+ Features', link: '/javascript#es6-features'},
    ],
    link: '/javascript',
  },
  {
    title: 'React',
    topics: [
      {title: 'Components', link: '/react#components'},
      {title: 'State and Props', link: '/react#state-and-props'},
      {title: 'Hooks', link: '/react#hooks'},
      {title: 'Virtual DOM', link: '/react#virtual-dom'},
      {title: 'JSX', link: '/react#jsx'},
    ],
    link: '/react',
  },
  {
    title: 'TypeScript',
    topics: [
      {title: 'Types', link: '/typescript#types'},
      {title: 'Interfaces', link: '/typescript#interfaces'},
      {title: 'Generics', link: '/typescript#generics'},
      {title: 'Type Inference', link: '/typescript#type-inference'},
      {title: 'Enums', link: '/typescript#enums'},
    ],
    link: '/typescript',
  },
  {
    title: 'Interview Questions',
    description: 'Explore a comprehensive list of common interview questions for React developers.',
    link: '/interview-questions',
  },
  {
    title: 'Coding Tasks',
    description: 'Practice with real-world coding tasks often given during React developer interviews.',
    link: '/coding-tasks',
  },
];

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
