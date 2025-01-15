import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Card, CardContent, CardActions, Typography, Button, List, ListItem, ListItemText} from '@mui/material';

import {SectionCardProps} from './types';

function SectionCard({title, topics, link, description}: SectionCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {topics ? (
          <List>
            {topics.slice(0, 5).map((topic, index) => (
              <ListItem key={index} component={RouterLink} to={topic.link}>
                <ListItemText primary={topic.title} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" component={RouterLink} to={link}>
          View All
        </Button>
      </CardActions>
    </Card>
  );
}

export default SectionCard;
