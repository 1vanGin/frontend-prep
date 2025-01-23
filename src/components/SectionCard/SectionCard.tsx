import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Button, Card, CardActions, CardContent, List, ListItem, ListItemText, Typography} from '@mui/material';

import {useTheme} from 'theme/ThemeContext';
import {colors} from 'shared/colors';

import {TSectionCardProps} from './types';

function SectionCard({title, topics, link, description}: TSectionCardProps) {
  const {mode} = useTheme();

  return (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
        {topics ? (
          <List>
            {topics.slice(0, 5).map(topic => (
              <ListItem
                key={topic.title}
                component={RouterLink}
                to={topic.link}
                sx={{
                  borderRadius: 1,
                  margin: '12px 0',
                  backgroundColor: colors.overlay[mode].hover,
                  '&:hover': {
                    borderColor: colors.primary.main,
                  },
                }}
              >
                <ListItemText
                  primary={topic.title}
                  primaryTypographyProps={{
                    color: 'text.primary',
                  }}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="text.secondary" sx={{lineHeight: 1.6}}>
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'center',
          padding: 2,
          borderTop: 1,
          borderColor: colors.border[mode],
        }}
      >
        <Button
          component={RouterLink}
          to={link}
          variant="contained"
          sx={{
            width: '100%',
            borderWidth: 1.5,
            '&:hover': {
              borderWidth: 1.5,
              backgroundColor: colors.overlay[mode].hover,
            },
          }}
        >
          Перейти
        </Button>
      </CardActions>
    </Card>
  );
}

export default SectionCard;
